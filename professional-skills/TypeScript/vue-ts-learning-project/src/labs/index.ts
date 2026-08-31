import type { LabRunner } from './types'
import { lab as ts01 } from './ts-01-structural-typing/index'

/** Реестр всех labs (для навигации позже). */
export const labs: LabRunner[] = [ts01]

export function getLabById(id: string): LabRunner | undefined {
  return labs.find((lab) => lab.id === id)
}
