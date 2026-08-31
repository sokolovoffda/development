import type { LabRunner } from '../types'
import { runExercises } from './exercises'

export const lab: LabRunner = {
  id: 'ts-01',
  title: 'Structural vs Nominal Typing',
  item: 1,
  run: runExercises,
}
