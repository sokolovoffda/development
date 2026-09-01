import type { LabRunner } from '../types'
import { runExercises } from './exercises'

export const lab: LabRunner = {
  id: 'ts-04',
  title: 'Структурная типизация',
  item: 4,
  run: runExercises,
}
