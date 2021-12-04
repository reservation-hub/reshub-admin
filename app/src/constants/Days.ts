export type TDays = {
  id: number
  name: string
  slug: string
}

export const Days: TDays[] = [
  { id: 1, name: '月', slug: 'monday' },
  { id: 2, name: '火', slug: 'tuesday' },
  { id: 3, name: '水', slug: 'wednesday' },
  { id: 4, name: '木', slug: 'thursday' },
  { id: 5, name: '金', slug: 'friday' },
  { id: 6, name: '土', slug: 'saturday' },
  { id: 7, name: '日', slug: 'sunday' }
]
