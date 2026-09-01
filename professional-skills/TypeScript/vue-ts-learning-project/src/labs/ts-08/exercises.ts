import type { LabCheck } from '../types'

/**
 * Правило 8 — Type space vs value space (книга, стр. ~56)
 *
 * В TypeScript одно имя может жить в ДВУХ «мирах»:
 *
 * | Пространство | Примеры | Существует в runtime? |
 * |--------------|---------|------------------------|
 * | **Type**     | type, interface, union | ❌ стирается |
 * | **Value**    | const, let, function, class | ✅ в JS |
 *
 * Запомнить:
 * - `interface Foo` — только type space → `instanceof Foo` ❌
 * - `class Foo` — и тип, и значение (конструктор) → `instanceof Foo` ✅
 * - `typeof` в **типе**: `type T = typeof p` → тип значения
 * - `typeof` в **значении**: `typeof p` → JS-строка `'object'`
 * - Одинаковое имя: `interface Cylinder` + `const Cylinder = ...` — разные сущности!
 *
 * TODO — раскомментируй, смотри hover и ошибки TS:
 */

// --- Пример из книги: одно имя, два пространства ---

interface CylinderShape {
  radius: number
  height: number
}

const makeCylinder = (radius: number, height: number): CylinderShape => ({
  radius,
  height,
})

void makeCylinder

// ❌ interface не в runtime — раскомментируй и увидишь ошибку:
// function volume(shape: unknown) {
//   if (shape instanceof CylinderShape) {
//     return Math.PI * shape.radius ** 2 * shape.height
//   }
// }

// ✅ class — и тип, и конструктор в runtime
class CylinderClass {
  radius: number
  height: number

  constructor(radius: number, height: number) {
    this.radius = radius
    this.height = height
  }
}

function volumeOfClass(shape: unknown): number | null {
  if (shape instanceof CylinderClass) {
    return Math.PI * shape.radius ** 2 * shape.height
  }
  return null
}

// --- typeof: type space vs value space ---

interface Person {
  first: string
  last: string
}

const person: Person = { first: 'Jane', last: 'Jacobs' }

function greet(person: Person): string {
  return `Hello, ${person.first}`
}

type PersonType = typeof person // type space → Person
type GreetFn = typeof greet // type space → (person: Person) => string

const runtimeTypeOfPerson = typeof person // value space → 'object' (JS)
const runtimeTypeOfGreet = typeof greet // value space → 'function' (JS)

type CylinderInstance = InstanceType<typeof CylinderClass>

// --- Indexed access — только type space ---
type PersonFirst = Person['first'] // string
type PersonField = Person['first' | 'last'] // string

const firstName: PersonFirst = person['first']

// --- TODO 1: hover ---
// Наведи на PersonType, GreetFn, runtimeTypeOfPerson — сравни

// --- TODO 2: class instance ---
// const c = new CylinderClass(2, 5)
// volumeOfClass(c)  // number, не null

// --- TODO 3: ловушка деструктуризации (книга, стр. ~60) ---
// НЕПРАВИЛЬНО — Person и string здесь как значения, не типы:
// function brokenEmail({ person: Person, subject: string }) { ... }
//
// ПРАВИЛЬНО:
// function email(opts: { person: Person; subject: string; body: string }) { ... }
// function email({ person, subject, body }: { person: Person; subject: string; body: string }) { ... }

export function runExercises(): LabCheck[] {
  const cylinder = new CylinderClass(1, 2)
  const vol = volumeOfClass(cylinder)

  const personTypeCheck: PersonType = person
  const greetFnCheck: GreetFn = greet
  const cylinderInstanceCheck: CylinderInstance = cylinder
  const fieldCheck: PersonField = 'Jane'

  void personTypeCheck
  void greetFnCheck
  void cylinderInstanceCheck
  void fieldCheck

  return [
    {
      id: '1',
      description: 'class CylinderClass — instanceof работает в runtime',
      pass: vol !== null && vol > 0,
      detail: 'interface-only не работает с instanceof — см. комментарии выше',
    },
    {
      id: '2',
      description: 'typeof в value space — JS-строки',
      pass: runtimeTypeOfPerson === 'object' && runtimeTypeOfGreet === 'function',
      detail: 'TODO 1 — сравни с type PersonType = typeof person',
    },
    {
      id: '3',
      description: 'Type space: Person["first"], InstanceType<typeof Class>',
      pass: firstName === 'Jane',
      detail: 'TODO 2–3 — CylinderClass и деструктуризация с типами',
    },
  ]
}
