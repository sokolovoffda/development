import type { LabCheck } from '../types'

/**
 * Правило 6 — Используйте редактор для изучения системы типов (книга, стр. ~44)
 *
 * Запомнить:
 * - TypeScript в IDE = **tsserver** (подсказки, hover, go to definition)
 * - **Hover** — выведенный тип переменной/выражения
 * - **Go to Definition (F12)** — исходник или .d.ts (напр. `fetch` → lib.dom.d.ts)
 * - **Go to Type Definition** — объявление типа символа
 * - Следуй по цепочке типов, как в книге:
 *   fetch → Promise<Response> → RequestInfo → Request | string
 *
 * Практика — в Cursor, не в runtime:
 */

const num = 10

const message: string | null = Math.random() > 0.5 ? 'hello' : null

function parseId(raw: string | number): number {
  if (typeof raw === 'string') {
    return parseInt(raw, 10)
  }
  return raw
}

// --- TODO 1: Hover ---
// Наведи на `num` → должен показать `number`
// Наведи на `message` → `string | null`
// Внутри parseId наведи на `raw` в каждой ветке → `string` / `number`

// --- TODO 2: Go to Definition ---
// Раскомментируй, поставь курсор на `fetch`, нажми F12:
// async function loadContacts() {
//   return fetch('/api/contacts')
// }
// Должен открыться lib.dom.d.ts → Promise<Response>

// --- TODO 3: Ошибка как подсказка ---
// Раскомментируй — смотри diagnostic от TS (красное подчёркивание + hover):
// const wrong: number = 'not-a-number'

// --- TODO 4: Цепочка из книги (на бумаге / в .d.ts) ---
// fetch(input: RequestInfo) → type RequestInfo = Request | string
// new Request(input: RequestInfo) → interface RequestInit { ... }

export function runExercises(): LabCheck[] {
  const parsedFromString = parseId('42')
  const parsedFromNumber = parseId(7)
  void message

  return [
    {
      id: '1',
      description: 'Hover: num имеет тип number (проверь в IDE)',
      pass: typeof num === 'number',
      detail: 'TODO 1 — hover на num, message, raw в parseId',
    },
    {
      id: '2',
      description: 'parseId сужает string | number',
      pass: parsedFromString === 42 && parsedFromNumber === 7,
    },
    {
      id: '3',
      description: 'Правило 6 — IDE + tsserver (теория)',
      pass: true,
      detail: 'TODO 2–4: F12 на fetch; прочитай правило и рис. 2.1–2.6 в книге',
    },
  ]
}
