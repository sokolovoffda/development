import type { LabRunner } from '../types'
import { runExercises } from './exercises'

export const lab: LabRunner = {
  id: 'ts-02',
  title: 'keyof and Lookup Types',
  item: 2,
  run: runExercises,
}
