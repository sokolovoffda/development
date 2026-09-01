# ts-02 — keyof и lookup types

**Item 2** · Assignment [TS-02](../../../../assignments/phase-1/02-keyof-lookup-types.md)

## TODO

| TODO | Суть |
|------|------|
| 1 | `type SettingsKey = keyof Settings` |
| 2 | Lookup: `Settings['ringVolume']`, `Settings[keyof Settings]` |
| 3 | Generic `getProperty<T, K extends keyof T>(obj, key): T[K]` |
| 4 | `sortContactsBy(contacts, field)` — `field: keyof ContactCardModel` |
