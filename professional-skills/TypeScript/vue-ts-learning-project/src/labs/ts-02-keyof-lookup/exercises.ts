import type { LabCheck } from '../types'

// --- Доменные типы (dealing-console-like) ---

export interface Settings {
  ringVolume: number
  micGain: number
  darkMode: boolean
}

export interface ContactCardModel {
  id: string
  displayName: string
  extension: string
}

// --- TODO 1: keyof ---
// type SettingsKey = keyof Settings
// const validKey: SettingsKey = 'ringVolume'
// const invalidKey: SettingsKey = 'volume'  // должна быть ошибка TS — раскомментируй и проверь

// --- TODO 2: lookup types T[K] ---
// type RingVolume = Settings['ringVolume']        // number
// type AnySettingValue = Settings[keyof Settings] // number | boolean

// --- TODO 3: generic getProperty ---
// export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key]
// }

// --- TODO 4: sort by keyof ---
// export function sortContactsBy(
//   contacts: ContactCardModel[],
//   field: keyof ContactCardModel,
// ): ContactCardModel[] {
//   return [...contacts].sort((a, b) =>
//     String(a[field]).localeCompare(String(b[field])),
//   )
// }

export function runExercises(): LabCheck[] {
  return [checkTodo1(), checkTodo2(), checkTodo3(), checkTodo4()]
}

function checkTodo1(): LabCheck {
  return {
    id: '1',
    description: 'keyof Settings includes ringVolume, excludes volume',
    pass: false,
    detail: 'Define SettingsKey = keyof Settings and use in checkTodo1',
  }
}

function checkTodo2(): LabCheck {
  return {
    id: '2',
    description: 'Lookup types: Settings["ringVolume"] and Settings[keyof Settings]',
    pass: false,
    detail: 'Add type assertions or test values in checkTodo2',
  }
}

function checkTodo3(): LabCheck {
  return {
    id: '3',
    description: 'getProperty returns correct typed value',
    pass: false,
    detail: 'Implement getProperty and test with Settings',
  }
}

function checkTodo4(): LabCheck {
  return {
    id: '4',
    description: 'sortContactsBy sorts by keyof ContactCardModel',
    pass: false,
    detail: 'Implement sortContactsBy and test sort by displayName',
  }
}
