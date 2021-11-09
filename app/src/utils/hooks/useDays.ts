export const useDays = (days: number[] | undefined) => {
  return days?.map((day) => {
    return day === 1
      ? '月'
      : day === 2
      ? '火'
      : day === 3
      ? '水'
      : day === 4
      ? '木'
      : day === 5
      ? '金'
      : day === 6
      ? '土'
      : '日'
  })
}
