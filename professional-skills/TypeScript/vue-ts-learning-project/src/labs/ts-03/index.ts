import type { LabRunner } from '../types'
import { runExercises } from './exercises'

export const lab: LabRunner = {
  id: 'ts-03',
  title: 'Независимость генерации кода',
  item: 3,
  run: runExercises,
}
