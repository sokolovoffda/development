# ts-01 — Structural vs Nominal Typing

**Item 1** · Assignment [TS-01](../../../../assignments/phase-1/01-structural-vs-nominal.md)

## Что сделать

Открой `exercises.ts` и выполни **TODO 1–4**. После каждого TODO сохрани файл и посмотри вывод в браузере (`npm run dev`).

| TODO | Суть |
|------|------|
| 1 | Два интерфейса с разными именами, одна форма `{ x, y }` — присвоение |
| 2 | Функция `distance` принимает `{ x, y }`; передай объект с **лишним** полем |
| 3 | Сценарий API → UI: `ApiContact` и `ContactCardModel` |
| 4 | (Опционально) литерал с лишним полем — закомментируй `@ts-expect-error` и убедись в ошибке |

## Проверка

- Все checks в LabRunner → `pass: true`
- `npm run build` без ошибок
