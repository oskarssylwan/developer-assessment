export type Clamp = (min: number) => (max: number) => (n: number) => number
export const clamp: Clamp = min => max => n => Math.min(Math.max(min, n), max)
