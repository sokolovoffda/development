# vue-ts-learning-project

Песочница для **62 правил** «Эффективный TypeScript». Трек: [../README.md](../README.md) · [../book-items.md](../book-items.md).

## Labs

```text
src/labs/
├── active.ts       ← какой lab в App
├── ts-01/ … ts-05/ ← глава 1 (каркас)
└── ts-06/ …        ← создаются по мере прохождения
```

## Команды

```bash
npm install
npm run dev      # LabRunner в браузере
npm run build    # vue-tsc + vite build
```

## Переключить lab

`src/labs/active.ts`:

```ts
export { lab as activeLab } from './ts-04/index'
```
