# Profile — TypeScript track

| | |
|--|--|
| **Старт** | 2026-08-31 |
| **Ритм** | ~1 час / день |
| **Книга** | «Эффективный TypeScript» (Effective TypeScript), 62 item'а |
| **Песочница** | `vue-ts-learning-project` (Vite + Vue 3 + TS) |

---

## Опыт (самооценка)

- **TypeScript:** база есть — пишу на TS в продакшене (Vue 3, Pinia, API). Цель — **закрепить и углубить**, не учиться с нуля.
- **Vue 3:** рабочий стек; в этом треке Vue — оболочка для практики, не отдельный курс.
- **Слабые зоны (гипотеза, уточним по ходу):** generics «на ощупь», conditional/mapped types, дизайн типов для API, избегание `any`/`as`, declaration files.

---

## Цели

### Краткосрочно (Phase 1, ~2–3 недели)

- Пройти Items 1–12 с практикой в labs.
- Уверенно объяснять structural vs nominal, `unknown` vs `any`, type assertions vs type guards.
- Привычка: читать item → конспект → задание → код → проверка.

### Среднесрочно (книга целиком, ~3–4 мес. при 1 ч/день)

- Системное понимание type system, inference, type design.
- Перенос паттернов в dealing-console-ui (типы для store, API, composables).

### Долгосрочно

- Меньше `any` и слепых `as` в MR; осознанный дизайн типов на ревью.

---

## Предпочтения

| | |
|--|--|
| Язык конспектов | русский |
| Язык кода | английский |
| Примеры | абстрактные + иногда из работы (SIP/UI/API) |
| Проверка | assignment (текст) + lab (код, `npm run build`) |

---

## Рабочий контекст (для примеров)

- **Продукт:** dealing-console-ui — Vue 3, TS, Pinia, FSD, Electron.
- **Типичные места для TS:** store types, API responses, composables, props/emits, IPC.
