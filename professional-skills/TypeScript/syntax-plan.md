# План синтаксиса TypeScript

Параллельный трек к **книге (62 правила)**. Здесь — **синтаксис и конструкции**, которые нужны, чтобы читать книгу и код без пробелов.

Обсуждение — в чате. Практика — [`vue-ts-learning-project/src/syntax/`](../vue-ts-learning-project/src/syntax/).

---

## Workflow

| Фраза | Действие |
|-------|----------|
| `синтаксис S03` / `syntax S03` | разбор модуля S03 в чате + задание в `lesson.ts` |
| `проверь S03` | разбор твоего кода |
| `синтаксис продолжаем` | следующий незакрытый модуль |
| `синтаксис вопрос …` | разбор без смены модуля |

После прохождения модуля — статус → `done` в таблице ниже.

---

## Модули (~15, компактно)

| # | Модуль | Что закрываем | Статус | Связь с книгой |
|---|--------|---------------|--------|----------------|
| S01 | Примитивы и аннотации | `string`, `number`, `boolean`, `void`, inference | in_progress | пр. 1, 12 |
| S02 | Массивы и tuple | `T[]`, `Array<T>`, `[string, number]` | pending | пр. 7, 16 |
| S03 | Объекты | `interface`, `type`, опциональные поля `?` | partial | пр. 4, 13 |
| S04 | Union и intersection | `\|`, `&`, assignable | partial | пр. 7 |
| S05 | Литералы и `as const` | `'idle' \| 'busy'`, widening | pending | пр. 11, 21 |
| S06 | `keyof` и lookup | `keyof T`, `T[K]` | partial | пр. 14 |
| S07 | Generics: функции | `<T>`, `K extends keyof T` | partial | пр. 7, 14 |
| S08 | Generics: типы | `Pick`, `Partial`, `Record` (вводно) | pending | пр. 14, 18 |
| S09 | Сужение (narrowing) | `typeof`, truthiness, `===` | pending | пр. 22 |
| S10 | Type guards | `in`, `instanceof`, `x is T` | pending | пр. 22 |
| S11 | Discriminated union | `{ kind: 'a' } \| { kind: 'b' }` | pending | пр. 22, 28 |
| S12 | Class vs interface/type | type/value space, `class`, `new` | partial | пр. 8 |
| S13 | `readonly`, optional | иммутабельность, `?` vs `\| undefined` | pending | пр. 17 |
| S14 | Функции | типы параметров/возврата, стрелочные, overload (обзор) | pending | пр. 12 |
| S15 | `any` / `unknown` / `never` | когда что; exhaustiveness | partial | пр. 5, 42, 59 |

**partial** — уже трогали в labs/книге, формально закроем в синтаксис-треке короткой сессией.

---

## Текущий модуль

**S01 — Примитивы и аннотации** (старт синтаксис-трека)

Файл: `src/syntax/lesson.ts` · черновик: `src/syntax/workshop.ts`

---

## Exit criteria (синтаксис закрыт)

- [ ] Все S01–S15 в статусе `done`
- [ ] Пишешь generic-функцию с `extends` без подглядывания
- [ ] Пишешь type guard `x is T` и discriminated union
- [ ] Объясняешь разницу `interface` / `type` / `class` / `any` / `unknown`

---

## История

| Дата | Модуль | Заметка |
|------|--------|---------|
| 2026-09-01 | — | План создан; partial из labs 4–8 учтён |
