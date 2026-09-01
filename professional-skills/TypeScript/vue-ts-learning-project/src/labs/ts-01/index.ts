import type { LabRunner } from '../types'
import { runExercises } from './exercises'

export const lab: LabRunner = {
  id: 'ts-01',
  title: 'TypeScript и JavaScript',
  item: 1,
  run: runExercises,
}
