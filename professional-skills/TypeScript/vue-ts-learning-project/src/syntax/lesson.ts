/**
 * S01 — Примитивы и аннотации
 * План: syntax-plan.md · Статус: in_progress
 *
 * Цель: явные аннотации vs inference, базовые типы.
 */

// --- Задание 1: аннотации ---
// Объяви переменные с явным типом:
// const title: string = ...
// const count: number = ...
// const active: boolean = ...

// --- Задание 2: inference ---
// Без аннотации — наведи hover, какой тип вывел TS?
// const inferredId = 'ext-42'
// const inferredPort = 5060

// --- Задание 3: функция ---
// Напиши greet(name: string): string → `Hello, ${name}`

// --- Задание 4: void ---
// logMessage(msg: string): void — только console.log, без return

// --- Проверка (раскомментируй после заданий) ---
// export function runS01Checks(): boolean {
//   const title: string = 'Dealing Console'
//   const count: number = 3
//   const active: boolean = true
//   const inferredId = 'ext-42'
//   void title
//   void count
//   void active
//   void inferredId
//   return typeof inferredId === 'string'
// }
