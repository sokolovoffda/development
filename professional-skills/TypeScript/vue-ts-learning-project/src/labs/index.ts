import type { LabRunner } from './types'
import { lab as ts01 } from './ts-01/index'
import { lab as ts02 } from './ts-02/index'
import { lab as ts03 } from './ts-03/index'
import { lab as ts04 } from './ts-04/index'
import { lab as ts05 } from './ts-05/index'

/** Реестр labs гл. 1. Полная карта: ../../../../book-items.md */
export const labs: LabRunner[] = [ts01, ts02, ts03, ts04, ts05]

export function getLabById(id: string): LabRunner | undefined {
  return labs.find((lab) => lab.id === id)
}
