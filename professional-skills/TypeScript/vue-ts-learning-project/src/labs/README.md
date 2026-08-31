# Labs

Практика по item'ам книги. Одна папка = один lab.

| Lab | Item | Папка |
|-----|------|-------|
| ts-01 | 1 — Structural vs nominal | `ts-01-structural-typing/` |

## Структура папки lab

```text
ts-NN-slug/
├── README.md      ← кратко: что делать
├── exercises.ts   ← твой код + runExercises()
└── index.ts       ← экспорт lab runner
```

## Как работать

1. Читай assignment в `../../assignments/phase-N/`.
2. Редактируй `exercises.ts` (секции `TODO`).
3. `npm run dev` — результаты на странице.
4. `npm run build` — проверка типов (`vue-tsc`).

Активный lab: `src/labs/active.ts`.

## Свободные эксперименты

Не привязанные к заданию — в [`../playground/`](../playground/).
