import type { LabRunner } from '../types'
import { runExercises } from './exercises'

export const lab: LabRunner = {
  id: 'ts-08',
  title: 'Type space vs value space',
  item: 8,
  run: runExercises,
}
