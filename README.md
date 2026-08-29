# Professional Development

Репозиторий для повышения профессиональных компетенций. Не рабочий код продукта, а учебный и методический контур рядом с основной работой.

**Рабочий продукт (контекст роли):**  
`C:\Users\d.sokolov\Desktop\projects\dealing-console-ui`  
Документация агента и wiki: `dealing-console-ui\.ai\` (особенно `knowledge\wiki\`).

---

## Как пользоваться чатами

| Чат | Назначение |
|-----|------------|
| **Этот (архитектура)** | Структура репозитория, соглашения, индекс документов, обновление этого README и каркаса папок |
| **english-learning** | Практика и материалы по английскому |
| **professional-skills** | Технические и soft skills (сейчас: TypeScript и дальше по плану) |

В чатах по направлениям агент должен сначала прочитать этот `README.md`, затем материалы своей папки. Детали архитектуры репозитория — только в архитектурном чате (или после явной просьбы обновить README).

---

## Структура

```text
development/
├── README.md                 ← этот файл (единый контекст для всех чатов)
├── .cursor/
│   ├── rules/project-context.mdc   ← alwaysApply: читать README
│   ├── hooks.json                  ← stop → auto-push по порогу строк
│   └── hooks/
│       ├── auto-push-on-threshold.mjs
│       └── auto-push.config.json   ← thresholdLines (сейчас 300)
├── english-learning/         ← изучение английского
└── professional-skills/      ← улучшение проф. качеств
    └── Effektivnyy-TypeScript_RuLit_Me_620115.pdf
        ← «Эффективный TypeScript» (Dan Vanderkam / Effective TypeScript)
```

Правило `.cursor/rules/project-context.mdc` с `alwaysApply: true` подключается во все чаты этого workspace и требует сначала читать этот README.

### Авто-push по порогу строк

В конце хода агента (`stop` hook): если незакоммиченных **текстовых** изменений ≥ `thresholdLines` (по умолчанию **300**) → `git add -A` → commit → `git push` на `origin`.

- Порог и исключения: `.cursor/hooks/auto-push.config.json`
- PDF/картинки и т.п. **не входят** в подсчёт строк (но попадут в commit, если уже в working tree и сработал порог по тексту)
- Логи: Cursor → Hooks output / channel
- Это **исключение** из правила «коммит только по просьбе» — только для этого репозитория и только через hook

Папки направлений пока минимальные. Внутреннюю структуру (планы, конспекты, exercises) добавляем по мере проработки в архитектурном чате.

---

## Профессиональный контекст (кратко)

Роль по факту работы в Dealing Console UI (Satel / RTU Turret):

- **Продукт:** desktop dealing console (звонки, трубки, BLF/presence, конференции, broadcast groups, pinned calls, Activity Monitor, панель быстрого вызова).
- **Стек:** Vue 3, TypeScript, Vite, Pinia, Electron, FSD, `@wui/common-library`, SIP/WebRTC (`@wui/jssip`), REST + WebSocket (RTU WebAPI + turret-admin), Vitest.
- **Тип задач:** feature end-to-end — домен, API-контракты, UI, интеграции SIP/IPC, рефакторинг границ FSD, фиксация правил в wiki.
- **Недавние фокусы:** Activity Monitor (WUI-5446), settings/IPC (WUI-5444), ContactCard → `features/contact-card`, CI/stage, QA predemo.

Отсюда логичные направления роста: TypeScript в глубину, реалтайм/SIP, архитектура UI, качество/тесты, English для docs/MR/собесов.

---

## Текущий этап

1. **Сделано:** каркас репозитория (`english-learning`, `professional-skills`), книга по TypeScript в `professional-skills/`.
2. **Сейчас:** зафиксировать контекст в этом README (архитектурный чат).
3. **Дальше (обсуждение):** наполнение направлений — roadmap, формат конспектов/упражнений, приоритеты English vs skills.

---

## Соглашения

- Имена папок и ключевых файлов — **на английском**.
- Учебные заметки и обсуждение с агентом — **на русском** (если не оговорено иное).
- Не дублировать сюда код/wiki dealing-console-ui: ссылаться на `.ai` и исходники продукта.
- Изменения структуры репозитория и этого README — предпочтительно в архитектурном чате.
- Коммиты вручную — только по явной просьбе; исключение: auto-push hook при ≥300 строк (см. выше).

---

## Индекс материалов

| Путь | Что это | Статус |
|------|---------|--------|
| `professional-skills/Effektivnyy-TypeScript_RuLit_Me_620115.pdf` | Книга Effective TypeScript | добавлена, план чтения ещё нет |
| `english-learning/` | English: профиль, assessment, план 6 мес., progress, resources | старт 2026-08-29, Phase 1 Foundation |

---

## История решений (кратко)

| Дата | Решение |
|------|---------|
| 2026-08-29 | Создан репозиторий study/development; папки `english-learning`, `professional-skills` |
| 2026-08-29 | Этот README — единый контекст для всех чатов; архитектура vs направления разделены по чатам |
| 2026-08-29 | В `professional-skills` добавлена книга «Эффективный TypeScript» |
| 2026-08-29 | Добавлен `.cursor/rules/project-context.mdc` (alwaysApply → читать README) |
| 2026-08-29 | Stop-hook auto-push: порог 300 текстовых строк → commit + push |
