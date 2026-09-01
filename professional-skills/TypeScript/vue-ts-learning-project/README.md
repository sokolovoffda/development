# vue-ts-learning-project

Песочница: **книга** (labs) + **синтаксис** (syntax). Трек: [../README.md](../README.md) · [../syntax-plan.md](../syntax-plan.md).

## Labs (книга, 62 правила)

```text
src/labs/
├── active.ts
└── ts-01/ … ts-NN/
```

## Syntax (S01–S15)

```text
src/syntax/
├── lesson.ts    ← текущее задание (ментор)
└── workshop.ts  ← твой черновик
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
