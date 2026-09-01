import type { LabRunner } from './types'
import { lab as ts01 } from './ts-01/index'
import { lab as ts02 } from './ts-02/index'
import { lab as ts03 } from './ts-03/index'
import { lab as ts04 } from './ts-04/index'
import { lab as ts05 } from './ts-05/index'
import { lab as ts06 } from './ts-06/index'
import { lab as ts07 } from './ts-07/index'
import { lab as ts08 } from './ts-08/index'

/** Реестр labs. Полная карта: ../../../../book-items.md */
export const labs: LabRunner[] = [ts01, ts02, ts03, ts04, ts05, ts06, ts07, ts08]

export function getLabById(id: string): LabRunner | undefined {
  return labs.find((lab) => lab.id === id)
}
