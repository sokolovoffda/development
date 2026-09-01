import { clearSyntaxLogs, pushSyntaxLog } from './log'
import { runLesson } from './lesson'
import { runWorkshop } from './workshop'

export function runSyntax(): void {
  clearSyntaxLogs()

  const originalLog = console.log
  console.log = (...args: unknown[]) => {
    pushSyntaxLog(args)
    originalLog.apply(console, args)
  }

  try {
    runLesson()
    runWorkshop()
  } finally {
    console.log = originalLog
  }

  window.dispatchEvent(new CustomEvent('syntax:updated'))
}

if (import.meta.hot) {
  import.meta.hot.accept(['./lesson', './workshop'], () => {
    runSyntax()
  })
}
