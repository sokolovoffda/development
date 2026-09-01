import type { LabRunner } from '../types'
import { runExercises } from './exercises'

export const lab: LabRunner = {
  id: 'ts-06',
  title: 'Редактор и система типов',
  item: 6,
  run: runExercises,
}
