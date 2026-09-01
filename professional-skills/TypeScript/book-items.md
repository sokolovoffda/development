# Effective TypeScript — 62 правила (1-е изд.)

Нумерация labs: **`ts-NN`** = **правило NN** в книге.

| Глава | Правила | Lab-папки |
|-------|---------|-----------|
| 1. Знакомство с TypeScript | 1–5 | `ts-01` … `ts-05` |
| 2. Система типов | 6–18 | `ts-06` … `ts-18` |
| 3. Вывод типов | 19–27 | `ts-19` … `ts-27` |
| 4. Проектирование типов | 28–37 | `ts-28` … `ts-37` |
| 5. Работа с any | 38–44 | `ts-38` … `ts-44` |
| 6. Декларации и @types | 45–52 | `ts-45` … `ts-52` |
| 7. Написание и запуск кода | 53–57 | `ts-53` … `ts-57` |
| 8. Миграция на TypeScript | 58–62 | `ts-58` … `ts-62` |

## Глава 1 (правила 1–5)

| # | RU (оглавление PDF) | EN |
|---|---------------------|-----|
| 1 | TypeScript и JavaScript | Understand the Relationship Between TypeScript and JavaScript |
| 2 | Настройки TypeScript | Know Which TypeScript Options You're Using |
| 3 | Независимость генерации кода | Understand That Code Generation Is Independent of Types |
| 4 | Структурная типизация | Get Comfortable with Structural Typing |
| 5 | Ограничьте any | Limit Use of the `any` Type |

## Workflow

1. Ты: **«разбираем правило 5»**
2. Ментор: читает правило в книге → создаёт/обновляет `labs/ts-05/`
3. В `exercises.ts` — заготовка (код или комментарии для теории)
4. `active.ts` → `export { lab as activeLab } from './ts-05/index'`

Папки для правил, которые ещё не разбирали, **не создаём** заранее (кроме гл. 1 — каркас по запросу).
