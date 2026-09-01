<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { getSyntaxLogs } from '../syntax/log'
import { runSyntax } from '../syntax/init'

const logs = ref<string[]>([])
const ranAt = ref('')

function syncLogs() {
  logs.value = [...getSyntaxLogs()]
  ranAt.value = new Date().toLocaleTimeString()
}

function refresh() {
  runSyntax()
  syncLogs()
}

function onSyntaxUpdated() {
  syncLogs()
}

onMounted(() => {
  syncLogs()
  window.addEventListener('syntax:updated', onSyntaxUpdated)
})

onUnmounted(() => {
  window.removeEventListener('syntax:updated', onSyntaxUpdated)
})
</script>

<template>
  <div class="syntax-runner">
    <header class="syntax-runner__header">
      <p class="syntax-runner__eyebrow">Syntax sandbox</p>
      <h2>lesson.ts + workshop.ts</h2>
      <p class="syntax-runner__meta">
        console.log from <code>runLesson()</code> / <code>runWorkshop()</code> · last run
        {{ ranAt || '—' }}
      </p>
      <button type="button" class="syntax-runner__btn" @click="refresh">Re-run</button>
    </header>

    <pre v-if="logs.length" class="syntax-runner__output">{{ logs.join('\n') }}</pre>
    <p v-else class="syntax-runner__empty">No output yet — add console.log in syntax/lesson.ts</p>

    <footer class="syntax-runner__footer">
      Edit <code>src/syntax/lesson.ts</code> or <code>workshop.ts</code> · runs on every app load
    </footer>
  </div>
</template>

<style scoped>
.syntax-runner {
  max-width: 42rem;
  margin: 0 auto;
  padding: 1.5rem 1.5rem 0;
  text-align: left;
  border-bottom: 1px solid var(--border, #333);
}

.syntax-runner__eyebrow {
  margin: 0 0 0.25rem;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted, #888);
}

.syntax-runner h2 {
  margin: 0 0 0.5rem;
  font-size: 1.15rem;
}

.syntax-runner__meta {
  margin: 0 0 1rem;
  color: var(--muted, #888);
  font-size: 0.9rem;
}

.syntax-runner__btn {
  padding: 0.5rem 1rem;
  border: 1px solid var(--border, #444);
  border-radius: 6px;
  background: transparent;
  color: inherit;
  cursor: pointer;
}

.syntax-runner__btn:hover {
  border-color: var(--accent, #646cff);
}

.syntax-runner__output {
  margin: 1rem 0;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--border, #333);
  background: color-mix(in srgb, var(--border, #333) 25%, transparent);
  font-family: ui-monospace, monospace;
  font-size: 0.85rem;
  line-height: 1.5;
  white-space: pre-wrap;
  overflow-x: auto;
}

.syntax-runner__empty {
  margin: 1rem 0;
  color: var(--muted, #888);
  font-size: 0.9rem;
}

.syntax-runner__footer {
  margin-bottom: 1.5rem;
  font-size: 0.85rem;
  color: var(--muted, #888);
}

.syntax-runner code {
  font-size: 0.8em;
}
</style>
