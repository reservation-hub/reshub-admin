export type TDays = {
  id: number
  name: string
  slug: string
}

export const Days: TDays[] = [
  { id: 1, name: '月', slug: 'MONDAY' },
  { id: 2, name: '火', slug: 'TUESDAY' },
  { id: 3, name: '水', slug: 'WEDNESDAY' },
  { id: 4, name: '木', slug: 'THURSDAY' },
  { id: 5, name: '金', slug: 'FRIDAY' },
  { id: 6, name: '土', slug: 'SATURDAY' },
  { id: 7, name: '日', slug: 'SUNDAY' }
]
