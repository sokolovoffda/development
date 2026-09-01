import type { LabCheck } from '../types'

/**
 * Правило 4 — Структурная типизация (книга, стр. ~35)
 *
 * Запомнить:
 * - TS сравнивает типы по ФОРМЕ полей, не по имени (duck typing)
 * - Объект с лишними полями часто совместим (переменная → параметр)
 * - Литерал с лишним полем → excess property check (строже)
 *
 * TODO — выполни по мере разбора правила:
 */

export interface Vector2D {
  x: number
  y: number
}

export function distance(v: Vector2D): number {
  return Math.hypot(v.x, v.y)
}

interface ScreenPoint{
  x:number,
  y:number,
  label?:string
}

const screen: ScreenPoint = {x:10, y:15, label:'test'}


// TODO 1: ScreenPoint { x, y, label? } → присвоить в Vector2D
const vector: Vector2D = screen
// TODO 2: объект с лишним полем source → передать в distance()
distance(screen)
// TODO 3: ApiContact → pickContactCardModel → ContactCardModel (dealing-console)

export interface ApiContact {
  id: string
  displayName: string
  extension: string
  presence?: 'available' | 'busy' | 'offline'
}

export interface ContactCardModel {
  id: string
  displayName: string
}

export function pickContactCardModel(api:ApiContact):ContactCardModel{
  return{
    id:api.id,
    displayName:api.displayName
  }
}
const fromApi: ApiContact = {
  id: 'ext-42',
  displayName: 'Sergey',
  extension: '2042',
  presence: 'available',
}

// TODO 4 (опционально): distance({ x: 1, y: 2, z: 3 }) — ошибка excess property на литерале
// distance({ x: 1, y: 2, z: 3 })

export function runExercises(): LabCheck[] {
  console.log('TODO-1: ', vector)
  console.log('TODO-3: ', pickContactCardModel(fromApi))
  return [
    {
      id: '1',
      description: 'Правило 4 — structural typing (заготовка)',
      pass: true,
      detail: 'Выполни TODO 1–3; обнови checks по аналогии с разбором в чате',
    },
  ]
}
