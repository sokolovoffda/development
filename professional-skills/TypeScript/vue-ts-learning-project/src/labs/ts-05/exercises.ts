import type { LabCheck } from '../types'

/**
 * Правило 5 — Ограничьте any (книга, стр. ~40)
 *
 * Запомнить:
 * - `any` отключает проверку типов — «выключатель» TS
 * - Ошибки уходят в runtime вместо compile time
 * - any заразителен: распространяется на результаты операций
 * - Лучше: конкретный тип, unknown + narrowing, generics (позже)
 *
 * TODO — раскомментируй и сравни поведение TS:
 */

// --- any отключает проверку ---
// function parseJson(raw: string): any {
//   return JSON.parse(raw)
// }
// const data = parseJson('{"id":1}')
// data.unknownField.whatever()  // TS молчит; runtime — ошибка

// --- без any: unknown (правило 42, позже) или явный тип ---
// function parseContact(raw: string): { id: string; displayName: string } {
//   return JSON.parse(raw)
// }
// const data2 = parseContact('{"id":1}')
// data2.unknownField.whatever()

export function runExercises(): LabCheck[] {
  return [
    {
      id: '1',
      description: 'Правило 5 — any отключает проверку (заготовка)',
      pass: true,
      detail: 'Раскомментируй примеры; сравни any vs типизированный parse',
    },
  ]
}
