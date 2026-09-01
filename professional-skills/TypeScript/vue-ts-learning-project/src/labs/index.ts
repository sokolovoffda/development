import type { LabRunner } from './types'
import { lab as ts01 } from './ts-01-structural-typing/index'
import { lab as ts02 } from './ts-02-keyof-lookup/index'

/** Реестр всех labs (для навигации позже). */
export const labs: LabRunner[] = [ts01, ts02]

export function getLabById(id: string): LabRunner | undefined {
  return labs.find((lab) => lab.id === id)
}
