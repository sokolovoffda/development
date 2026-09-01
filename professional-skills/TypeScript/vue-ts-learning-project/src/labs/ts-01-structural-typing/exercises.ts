import type { LabCheck } from '../types'

export interface Vector2D {
  x: number
  y: number
}

export function distance(v: Vector2D): number {
  return Math.hypot(v.x, v.y)
}

interface ScreenPoint{
  x:number
  y:number
  label?: string
}

// --- TODO 1: Structural compatibility ---
// Создай интерфейс ScreenPoint: x, y, опционально label?: string
// Проверь: const asVector: Vector2D = screen — компилируется

// export interface ScreenPoint { ... }

// --- TODO 2: Extra properties ---
// const fromWebSocket = { x: 3, y: 4, source: 'rtu-websocket' }
// const len = distance(fromWebSocket)  // должно быть 5

// --- TODO 3: API → UI (dealing-console) ---

export interface ContactCardModel {
  id: string
  displayName: string
}

export interface ApiContact {
  id: string
  displayName: string
  extension: string
  presence?: 'available' | 'busy' | 'offline'
}
export function pickContactCardModel(api: ApiContact): ContactCardModel { 
  return {
    id:api.id,
    displayName:api.displayName
  }
}

// --- TODO 4 (опционально): excess property check ---
const badLiteral = { x: 1, y: 2, z: 3 }
distance(badLiteral)  // TS error — лишнее поле z на литерале

export function runExercises(): LabCheck[] {
  return [checkTodo1(), checkTodo2(), checkTodo3()]
}

function checkTodo1(): LabCheck {
  const screen: ScreenPoint = { x: 10, y: 20, label: 'monitor' }
  const asVector: Vector2D = screen
  return { id: '1', description: 'ScreenPoint → Vector2D (structural assign)', pass: asVector.x === 10 && asVector.y === 20 }
}

function checkTodo2(): LabCheck {
  const fromWebSocket = { x: 3, y: 4, source: 'rtu-websocket' as const }
  const len = distance(fromWebSocket)
  return {
    id: '2',
    description: 'distance() accepts extra properties (variable, not literal)',
    pass: len === 5,
    detail: len === 5 ? undefined : `expected 5, got ${len}`,
  }
}

function checkTodo3(): LabCheck {
  const card = pickContactCardModel({
    id: 'ext-42',
    displayName: 'Sergey',
    extension: '2042',
    presence: 'available',
  })
  return {
    id: '3',
    description: 'pickContactCardModel(api) returns ContactCardModel',
    pass: card.id === 'ext-42' && card.displayName === 'Sergey',
  }
}
