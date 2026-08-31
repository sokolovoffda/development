# vue-ts-learning-project

Песочница для трека **TypeScript + Vue 3**. Документация трека: [../README.md](../README.md).

## Структура

```text
src/
├── labs/              ← задания по item'ам книги
│   ├── active.ts      ← какой lab показывает App
│   └── ts-01-…/
├── playground/        ← свободные эксперименты
├── components/
│   └── LabRunner.vue
└── App.vue
```

## Команды

```bash
npm install
npm run dev      # браузер — вывод lab checks
npm run build    # vue-tsc + vite build
```

## Текущий lab

**ts-01** — Item 1, structural vs nominal typing.

- Assignment: [TS-01](../assignments/phase-1/01-structural-vs-nominal.md)
- Код: `src/labs/ts-01-structural-typing/exercises.ts`

## Vue (кратко)

- `<script setup lang="ts">` — Composition API + TS в SFC.
- Сейчас UI минимальный: только runner для labs. Vue подключим сильнее с items про props/composables.
