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

// TODO 1: ScreenPoint { x, y, label? } → присвоить в Vector2D

// TODO 2: объект с лишним полем source → передать в distance()

// TODO 3: ApiContact → pickContactCardModel → ContactCardModel (dealing-console)

export interface ContactCardModel {
  id: string
  displayName: string
}

// TODO 4 (опционально): distance({ x: 1, y: 2, z: 3 }) — ошибка excess property на литерале

export function runExercises(): LabCheck[] {
  return [
    {
      id: '1',
      description: 'Правило 4 — structural typing (заготовка)',
      pass: false,
      detail: 'Выполни TODO 1–3; обнови checks по аналогии с разбором в чате',
    },
  ]
}
