import { clamp } from './clamp'

export type Take = <T>(n: number) => (arr: T[]) => T[]

export const take: Take = n => arr => {
  const startIndex = 0
  const endIndex = clamp(0)(arr.length - 1)(n)
  return arr.slice(startIndex, endIndex)
}
