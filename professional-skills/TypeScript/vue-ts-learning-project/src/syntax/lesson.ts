/**
 * S05 — Литералы и as const
 * План: syntax-plan.md · Статус: in_progress
 * Пиши в runLesson() — console.log на странице и в DevTools.
 */

export function runLesson(): void {
  // вызывай типы и функции отсюда
}

// --- Задание 1: type CallState = 'idle' | 'ringing' | 'busy' ---
// --- Задание 2: setState(state: CallState): void — console.log ---
// --- Задание 3: widening — let a = 'idle' и const b = 'idle', hover: string vs 'idle' ---
// --- Задание 4: const config = { host: '10.0.0.1', port: 5060 } as const ---
// --- Задание 5: выведи config.host и config.port, попробуй config.port = 5080 (закомментируй ошибку) ---
// --- Проверка (раскомментируй после заданий) ---
// export function runS05Checks(): boolean {
//   setState('idle')
//   const config = { host: '10.0.0.1', port: 5060 } as const
//   return config.port === 5060
// }
