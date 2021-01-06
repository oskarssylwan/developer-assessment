
export type Take = <T>(n: number) => (arr: T[]) => T[]
export const take: Take = n => arr => arr.slice(0, n)
