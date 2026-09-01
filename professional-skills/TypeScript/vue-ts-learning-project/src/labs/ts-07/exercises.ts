import type { LabCheck } from '../types'

/**
 * Правило 7 — Думайте о типах как о множествах значений (книга, стр. ~48)
 *
 * Запомнить:
 * - Тип = множество допустимых значений (`number` → 42, -3.5, …; не `'Canada'`)
 * - `never` — пустое множество
 * - Union `A | B` — объединение множеств
 * - Intersection `A & B` — пересечение (нужны поля обоих)
 * - Assignable = значение из **подмножества** целевого типа
 * - `keyof (A | B)` = `keyof A & keyof B`  (общие ключи)
 * - `keyof (A & B)` = `keyof A | keyof B`
 * - Tuple `[n, n]` — подмножество `number[]`, но не наоборот (длина!)
 *
 * TODO — раскомментируй/допиши и смотри ошибки TS:
 */

// --- TODO 1: Union как объединение множеств ---
type AB = 'A' | 'B'
type AB12 = 'A' | 'B' | 12

// const ok: AB = 'A'
// const fail: AB = 'C'  // 'C' ∉ {'A','B'}

// --- TODO 2: Подмножество при присваивании ---
// const ab: AB = Math.random() < 0.5 ? 'A' : 'B'
// const ab12: AB12 = ab           // OK: {'A','B'} ⊆ {'A','B',12}
// declare let twelve: AB12
// const back: AB = twelve         // ошибка: 12 ∉ {'A','B'}

// --- TODO 3: Intersection ---
interface Person {
  name: string
  age?:number
}
interface Lifespan {
  name:string
  birth: Date
  death?: Date
}
type PersonSpan = Person & Lifespan

type keyPersonSpan = keyof PersonSpan

type valPersonSpan = PersonSpan['name']

const valPS: valPersonSpan = 'test'
const keyPS: keyPersonSpan[] = ['age', 'birth']
void valPS
void keyPS

// const ps: PersonSpan = {
//   name: 'Alan Turing',
//   birth: new Date('1912-06-23'),
//   death: new Date('1954-06-07'),
// }


// --- TODO 4: Tuple vs array (подмножества) ---
// const list = [1, 2]                        // number[]
// const tuple: [number, number] = list       // ошибка: длина не гарантирована
// const triple: [number, number, number] = [1, 2, 3]
// const double: [number, number] = triple      // ошибка: length 3 vs 2

// --- TODO 5: generics — sortBy<T, K extends keyof T> (ты пишешь функцию) ---
//
// Задача: реализуй sortBy (как в книге, конец правила 7):
//   function sortBy<T, K extends keyof T>(rows: T[], key: K): T[] { ... }
//
// Данные для проверки — передай contacts в sortBy:
//   sortBy(contacts, 'displayName')  // OK — K = 'displayName'
//   sortBy(contacts, 'extension')    // OK
//   sortBy(contacts, 'phone')        // ❌ ошибка: 'phone' ∉ keyof ContactRow
//
// После реализации — вызови в checkTodo5() ниже.

export interface ContactRow {
  id: string
  displayName: string
  extension: string
}

export const contacts: ContactRow[] = [
  { id: '2', displayName: 'Zara', extension: '1002' },
  { id: '1', displayName: 'Anna', extension: '1001' },
  { id: '3', displayName: 'Boris', extension: '1003' },
]

export function runExercises(): LabCheck[] {
  const abValue: AB = 'B'
  const ab12Value: AB12 = abValue

  const ps: PersonSpan = {
    name: 'Alan Turing',
    birth: new Date('1912-06-23'),
  }

  const tuple: [number, number] = [1, 2]

  return [
    ...runBaseChecks(abValue, ab12Value, ps, tuple),
    checkTodo5(),
  ]
}

function runBaseChecks(
  abValue: AB,
  ab12Value: AB12,
  ps: PersonSpan,
  tuple: [number, number],
): LabCheck[] {
  return [
    {
      id: '1',
      description: 'Union: AB ⊆ AB12 (подмножество)',
      pass: abValue === 'B' && ab12Value === 'B',
      detail: 'TODO 1–2 — раскомментируй примеры с C и twelve',
    },
    {
      id: '2',
      description: 'Intersection: Person & Lifespan → PersonSpan',
      pass: ps.name === 'Alan Turing' && ps.birth instanceof Date,
      detail: 'TODO 3 — hover на PersonSpan',
    },
    {
      id: '3',
      description: 'Tuple [number, number] — фиксированная длина',
      pass: tuple.length === 2 && tuple[0] === 1,
      detail: 'TODO 4 — почему list нельзя присвоить в tuple',
    },
  ]
}

function checkTodo5(): LabCheck {
  // После sortBy — раскомментируй и проверь порядок:
  // const sorted = sortBy(contacts, 'displayName')
  // const pass = sorted[0]?.displayName === 'Anna'

  return {
    id: '5',
    description: 'sortBy<T, K extends keyof T> на contacts',
    pass: false,
    detail: 'Напиши sortBy; вызови sortBy(contacts, "displayName"); обнови checkTodo5',
  }
}
