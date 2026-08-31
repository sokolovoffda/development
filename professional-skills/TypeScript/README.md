# TypeScript + Vue 3 — учебный трек

Закрепление TypeScript на практике. Книга — **«Эффективный TypeScript»** (Dan Vanderkam, 62 item'а). Песочница — [`vue-ts-learning-project/`](vue-ts-learning-project/).

Обсуждение и конспекты — **на русском**. Код и идентификаторы — **на английском**.

---

## Фокус

| Приоритет | Что |
|-----------|-----|
| **Главное** | TypeScript: типы, inference, дизайн API, паттерны из книги |
| **Вторично** | Vue 3 — только когда нужно «приземлить» тему (props, composables, generic-компоненты) |
| **Контекст** | Примеры из dealing-console-ui (Pinia, API DTO, FSD) — по запросу или в заданиях |

---

## Workflow сессии (~1 ч/день)

1. Ты пишешь: «продолжаем», «item N», «проверь TS-01», «вопрос по …».
2. Ментор даёт **краткий разбор** item'а → конспект в `notes/phase-N/`.
3. Задание в `assignments/phase-N/` + код в `vue-ts-learning-project/src/labs/`.
4. Ты пишешь ответ в assignment и код в lab; для проверки: Status → `review` + «проверь TS-01».
5. Разбор в `## Mentor feedback`; error bank и session log в `progress.md`.

**Режим «эксперимент»** — свободная игра в `src/playground/` без фиксации в progress.

---

## Документы

| Файл | Назначение |
|------|------------|
| [profile.md](profile.md) | Уровень, цели, ритм, слабые места |
| [plan.md](plan.md) | Обзор фаз + ссылки на части книги |
| [progress.md](progress.md) | Session log, error bank, чекпоинты |
| [phases/phase-1.md](phases/phase-1.md) | Phase 1 (Items 1–12) — **active** |
| [notes/](notes/README.md) | Конспекты + FAQ по фазам |
| [assignments/](assignments/README.md) | Задания (Your answer / Mentor feedback) |
| [vue-ts-learning-project/](vue-ts-learning-project/) | Vite + Vue 3 + TS — labs и playground |

---

## Триггеры в чате

| Фраза | Действие |
|-------|----------|
| `продолжаем` | следующий item по плану |
| `item 7` / `TS-07` | конкретный item книги |
| `проверь TS-01` | разбор assignment + lab |
| `вопрос по …` | разбор без нового задания |
| `эксперимент` | подсказки для playground |
| `связь с работой` | пример из dealing-console / FSD |

---

## Статус

- **Старт:** 2026-08-31
- **Фаза:** [Phase 1 — Getting to Know TypeScript](phases/phase-1.md)
- **Сейчас:** Item 1 · [TS-01](assignments/phase-1/01-structural-vs-nominal.md) · lab [`ts-01-structural-typing`](vue-ts-learning-project/src/labs/ts-01-structural-typing/)
