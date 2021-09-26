export const NavMenu: string[] = [
  'ダッシュボード', 'ユーザー一覧', 'サロン一覧'
]

export const days: { id: number, value: string }[] = [
  { id: 1, value: '月' },
  { id: 2, value: '火' },
  { id: 3, value: '水' },
  { id: 4, value: '木' },
  { id: 5, value: '金' },
  { id: 6, value: '土' },
  { id: 7, value: '日' }
]

export const Roles: { id: number, value: string, slug: string }[] = [
  { id: 1, value: 'client', slug: 'client' },
  { id: 2, value: 'admin', slug: 'admin' },
  { id: 3, value: 'shop staff', slug: 'shop staff' }
]

export const HeaderType = {
  LIST: 'list',
  DETAIL: 'detail'
} as const

export const TIME_PICKER_TIME_TYPE = {
  HOUR: 'hour',
  MINUTE: 'minute'
} as const