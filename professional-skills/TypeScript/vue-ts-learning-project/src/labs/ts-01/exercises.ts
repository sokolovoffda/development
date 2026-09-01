import type { LabCheck } from '../types'

/**
 * Правило 1 — TypeScript и JavaScript (книга, стр. ~18)
 *
 * Запомнить:
 * - TS — надмножество JS: любой валидный JS-код — валидный TS
 * - Синтаксис типов стирается при компиляции (`who: string` не существует в runtime)
 * - TS ловит ошибки до запуска (опечатки в методах и полях)
 * - Inference: `let city = 'ny'` → тип `string` без явной аннотации
 *
 * Практика — раскомментируй в IDE и посмотри на ошибки TS:
 */

// --- Пример из книги: toUppercase vs toUpperCase ---
// let city = 'new york city'
// console.log(city.toUppercase())
// TS: Property 'toUppercase' does not exist. Did you mean 'toUpperCase'?
// JS без TS: TypeError в runtime

// --- Пример: capitol vs capital ---
// interface State { name: string; capital: string }
// const states: State[] = [{ name: 'Alabama', capitol: 'Montgomery' }]
// TS поймает опечатку в поле до запуска

// --- TS-only синтаксис не выполняется в Node как .js ---
// function greet(who: string) { console.log('Hello', who) }
// Сохрани как .js → SyntaxError: Unexpected token ':'

export function runExercises(): LabCheck[] {
  return [
    {
      id: '1',
      description: 'Правило 1 — теория: TS ⊃ JS, типы только на этапе компиляции',
      pass: true,
      detail: 'Прочитай комментарии и правило в книге; раскомментируй примеры в IDE',
    },
  ]
}
