import type { LabRunner } from '../types'
import { runExercises } from './exercises'

export const lab: LabRunner = {
  id: 'ts-05',
  title: 'Ограничьте any',
  item: 5,
  run: runExercises,
}
