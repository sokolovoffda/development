import type { LabRunner } from '../types'
import { runExercises } from './exercises'

export const lab: LabRunner = {
  id: 'ts-07',
  title: 'Типы как множества',
  item: 7,
  run: runExercises,
}
