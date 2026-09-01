# Item 2 — keyof и lookup types (T[K])

| | |
|--|--|
| **Книга** | Effective TypeScript, Item 2 |
| **Фаза** | 1 |

---

## Главная идея

У каждого объектного типа есть **набор ключей**. TypeScript умеет работать с ними на уровне типов:

- **`keyof T`** — union всех ключей типа `T`
- **`T[K]`** — тип значения свойства `K` в `T` (lookup / indexed access type)

Вместе они дают **типобезопасный** доступ к полям по имени.

```typescript
interface User {
  id: string
  displayName: string
  extension: string
}

type UserKey = keyof User
// 'id' | 'displayName' | 'extension'

type DisplayNameType = User['displayName']
// string
```

---

## keyof — «все ключи объекта»

```typescript
interface Settings {
  ringVolume: number
  micGain: number
  darkMode: boolean
}

type SettingsKey = keyof Settings
// 'ringVolume' | 'micGain' | 'darkMode'
```

**Зачем:** ограничить аргумент функции только **существующими** ключами — опечатка `'ringVolum'` → ошибка компиляции.

---

## T[K] — «тип поля по ключу»

```typescript
type RingVolume = Settings['ringVolume']   // number
type AnySetting = Settings[keyof Settings] // number | boolean  (union всех значений)
```

`Settings[keyof Settings]` — частый паттерн: «любое значение из объекта».

---

## Вместе: generic-функция

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const s: Settings = { ringVolume: 80, micGain: 50, darkMode: true }

getProperty(s, 'ringVolume')  // number
getProperty(s, 'darkMode')    // boolean
getProperty(s, 'volume')        // ❌ 'volume' не в keyof Settings
```

**Связь с Item 1:** `K extends keyof T` — structural: ключ должен **существовать** в форме объекта.

---

## Связь с работой (dealing-console)

```typescript
interface ContactCardModel {
  id: string
  displayName: string
}

// Типобезопасное поле для таблицы / сортировки
type SortableField = keyof ContactCardModel  // 'id' | 'displayName'

function sortBy<T>(items: T[], field: keyof T): T[] {
  return [...items].sort((a, b) => String(a[field]).localeCompare(String(b[field])))
}
```

Или Pinia: `patch` только по известным ключам store.

---

## Типичные ошибки

| Ошибка | Правильнее |
|--------|------------|
| `key: string` вместо `key: keyof T` | `K extends keyof T` |
| Забыть, что `keyof` для union объектов — пересечение ключей | Проверить на конкретном типе |
| `T[K]` где `K` не ограничен `keyof T` | `K extends keyof T` |

---

## Мини-чеклист «понял»

- [ ] Могу написать `keyof` для своего интерфейса
- [ ] Понимаю `T['field']` и `T[keyof T]`
- [ ] Написал `getProperty<T, K extends keyof T>(...)`

Следующий шаг: [TS-02](../../assignments/phase-1/02-keyof-lookup-types.md) + lab `ts-02-keyof-lookup`.
