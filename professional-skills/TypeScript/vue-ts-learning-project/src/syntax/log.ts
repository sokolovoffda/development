/** On-page log lines captured during syntax run (see init.ts). */
const lines: string[] = []

export function clearSyntaxLogs(): void {
  lines.length = 0
}

export function pushSyntaxLog(args: unknown[]): void {
  const line = args
    .map((arg) => {
      if (typeof arg === 'string') return arg
      try {
        return JSON.stringify(arg)
      } catch {
        return String(arg)
      }
    })
    .join(' ')
  lines.push(line)
}

export function getSyntaxLogs(): readonly string[] {
  return lines
}
