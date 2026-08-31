export type LabCheck = {
  id: string
  description: string
  pass: boolean
  detail?: string
}

export type LabRunner = {
  id: string
  title: string
  item: number
  run: () => LabCheck[]
}
