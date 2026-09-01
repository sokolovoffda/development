import type { LabCheck } from '../types'

/**
 * Правило 2 — Настройки TypeScript (книга, стр. ~25)
 *
 * Запомнить:
 * - Настройки — в tsconfig.json (не разбрасывать по CLI)
 * - `strict` включает набор строгих проверок
 * - `noImplicitAny` — неявный any → ошибка
 * - `strictNullChecks` — null/undefined учитываются в типах
 *
 * Практика: открой в проекте `tsconfig.app.json` и `tsconfig.json`.
 * Найди, какие опции включены через `extends: @vue/tsconfig`.
 */

// --- Эксперимент (в отдельном scratch-файле в playground/) ---
// function add(a, b) { return a + b }  // без noImplicitAny: a,b → any
// add('1', 2)  // '12' — ошибка типов, но JS выполнится

export function runExercises(): LabCheck[] {
  return [
    {
      id: '1',
      description: 'Правило 2 — теория: знай свой tsconfig и strict-опции',
      pass: true,
      detail: 'Сверь tsconfig проекта с книгой; эксперименты — в playground/',
    },
  ]
}
