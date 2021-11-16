/**
 * @param from
 * @param to
 * @param step
 */
export const useRange = (from: number, to: number, step = 1): number[] => {
  const arr = []
  for (let i = from; i <= to; i += step) arr.push(i)
  return arr
}
