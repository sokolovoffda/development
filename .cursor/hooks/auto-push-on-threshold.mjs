#!/usr/bin/env node
/**
 * stop-hook: if uncommitted text changes >= threshold → git add / commit / push.
 * Config: .cursor/hooks/auto-push.config.json
 * Stdout must be JSON for Cursor ({ } or { followup_message }).
 * Diagnostics → stderr (Hooks output channel).
 */

import { spawnSync } from 'node:child_process'
import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const hookDir = fileURLToPath(new URL('.', import.meta.url))
const repoRoot = join(hookDir, '..', '..')
const configPath = join(hookDir, 'auto-push.config.json')

function log(...args) {
  console.error('[auto-push]', ...args)
}

function readStdin() {
  return new Promise((resolve) => {
    let raw = ''
    process.stdin.setEncoding('utf8')
    process.stdin.on('data', (chunk) => {
      raw += chunk
    })
    process.stdin.on('end', () => {
      try {
        resolve(raw.trim() ? JSON.parse(raw) : {})
      } catch {
        resolve({})
      }
    })
  })
}

function loadConfig() {
  const defaults = {
    thresholdLines: 300,
    commitMessagePrefix: 'chore: auto-save',
    remote: 'origin',
    branch: null,
    excludeGlobs: ['**/*.pdf', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.webp', '**/*.zip', '**/*.exe'],
  }
  if (!existsSync(configPath)) return defaults
  try {
    return { ...defaults, ...JSON.parse(readFileSync(configPath, 'utf8')) }
  } catch (e) {
    log('config parse failed, using defaults:', e.message)
    return defaults
  }
}

function git(args, opts = {}) {
  const result = spawnSync('git', args, {
    cwd: repoRoot,
    encoding: 'utf8',
    ...opts,
  })
  return result
}

function gitOk(args) {
  const r = git(args)
  if (r.status !== 0) {
    log('git', args.join(' '), 'failed:', (r.stderr || r.stdout || '').trim())
    return null
  }
  return (r.stdout || '').trim()
}

function matchGlob(relPath, glob) {
  const norm = relPath.replace(/\\/g, '/')
  const g = glob.replace(/\\/g, '/')
  if (g.startsWith('**/')) {
    const rest = g.slice(3)
    if (rest.includes('*')) {
      const re = new RegExp('^' + rest.replace(/\./g, '\\.').replace(/\*/g, '[^/]*') + '$', 'i')
      return re.test(norm.split('/').pop() || '') || re.test(norm)
    }
    return norm.endsWith(rest) || norm.includes('/' + rest) || norm === rest.slice(rest.startsWith('/') ? 1 : 0)
  }
  const re = new RegExp(
    '^' + g.replace(/\./g, '\\.').replace(/\*\*/g, '.*').replace(/\*/g, '[^/]*') + '$',
    'i',
  )
  return re.test(norm)
}

function isExcluded(relPath, excludeGlobs) {
  return excludeGlobs.some((g) => matchGlob(relPath, g))
}

function countFileLines(absPath) {
  try {
    const text = readFileSync(absPath, 'utf8')
    if (!text) return 0
    return text.split(/\r?\n/).length
  } catch {
    return 0
  }
}

/** Count added+deleted lines in working tree (staged + unstaged + untracked text). */
function countDirtyLines(excludeGlobs) {
  let total = 0

  // numstat: staged + unstaged vs HEAD
  const numstat = gitOk(['diff', '--numstat', 'HEAD']) ?? ''
  const unstaged = gitOk(['diff', '--numstat']) ?? ''
  const staged = gitOk(['diff', '--numstat', '--cached']) ?? ''

  // Prefer full working tree vs HEAD (covers staged+unstaged)
  const lines = (numstat || `${staged}\n${unstaged}`).split('\n').filter(Boolean)
  const seen = new Set()

  for (const line of lines) {
    const parts = line.split('\t')
    if (parts.length < 3) continue
    const [added, removed, filePath] = parts
    const rel = filePath.replace(/\\/g, '/')
    if (seen.has(rel)) continue
    seen.add(rel)
    if (isExcluded(rel, excludeGlobs)) continue
    if (added === '-' || removed === '-') continue // binary
    total += (parseInt(added, 10) || 0) + (parseInt(removed, 10) || 0)
  }

  // Untracked
  const untracked = gitOk(['ls-files', '--others', '--exclude-standard']) ?? ''
  for (const filePath of untracked.split('\n').filter(Boolean)) {
    const rel = filePath.replace(/\\/g, '/')
    if (isExcluded(rel, excludeGlobs)) continue
    total += countFileLines(join(repoRoot, filePath))
  }

  return total
}

function hasChangesToCommit() {
  const r = git(['status', '--porcelain'])
  return r.status === 0 && Boolean((r.stdout || '').trim())
}

function currentBranch() {
  return gitOk(['rev-parse', '--abbrev-ref', 'HEAD']) || 'main'
}

async function main() {
  const input = await readStdin()
  const status = input.status || 'completed'

  if (status === 'aborted') {
    log('skip: aborted')
    process.stdout.write('{}\n')
    return
  }

  const config = loadConfig()
  const dirty = countDirtyLines(config.excludeGlobs)
  log(`dirtyLines=${dirty} threshold=${config.thresholdLines}`)

  if (dirty < config.thresholdLines) {
    process.stdout.write('{}\n')
    return
  }

  if (!hasChangesToCommit()) {
    log('threshold met but nothing to commit')
    process.stdout.write('{}\n')
    return
  }

  const add = git(['add', '-A'])
  if (add.status !== 0) {
    log('git add failed:', (add.stderr || '').trim())
    process.stdout.write('{}\n')
    return
  }

  const msg = `${config.commitMessagePrefix} (~${dirty} lines)`
  const commit = git(['commit', '-m', msg], {
    env: {
      ...process.env,
      // avoid editor
      GIT_EDITOR: 'true',
    },
  })
  if (commit.status !== 0) {
    log('git commit failed:', (commit.stderr || commit.stdout || '').trim())
    process.stdout.write('{}\n')
    return
  }
  log('committed:', msg)

  const branch = config.branch || currentBranch()
  const push = git(['push', '-u', config.remote, branch])
  if (push.status !== 0) {
    log('git push failed:', (push.stderr || push.stdout || '').trim())
    // local commit remains; agent can retry later
    process.stdout.write('{}\n')
    return
  }
  log(`pushed to ${config.remote}/${branch}`)
  process.stdout.write('{}\n')
}

main().catch((e) => {
  log('fatal:', e.message || e)
  process.stdout.write('{}\n')
})
