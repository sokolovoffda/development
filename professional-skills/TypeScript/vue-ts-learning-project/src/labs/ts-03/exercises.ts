import type { LabCheck } from '../types'

/**
 * Правило 3 — Независимость генерации кода от типов (книга, стр. ~28)
 *
 * Запомнить:
 * - tsc делает ДВЕ вещи: проверка типов + emit JS
 * - Код с ошибками типов МОЖЕТ скомпилироваться (если не включён noEmitOnError)
 * - Типы и interface исчезают в runtime — их нельзя проверить через instanceof
 * - Для runtime-проверки: typeof, in, tagged unions, class (есть и тип, и значение)
 *
 * Практика — раскомментируй и посмотри:
 */

// interface User { id: string; name: string }

// ❌ interface не существует в runtime:
// const u: User = { id: '1', name: 'Ann' }
// console.log(u instanceof User)  // всегда false

// ✅ class — и тип, и конструктор в runtime:
// class UserClass { constructor(public id: string, public name: string) {} }
// const c = new UserClass('1', 'Ann')
// console.log(c instanceof UserClass)  // true

export function runExercises(): LabCheck[] {
  return [
    {
      id: '1',
      description: 'Правило 3 — теория: типы ≠ runtime, interface не в JS',
      pass: true,
      detail: 'Прочитай правило; раскомментируй примеры instanceof в IDE',
    },
  ]
}
