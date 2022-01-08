export const USER_CELL: Record<string, any> = {
  No: 'No',
  email: 'メールアドレス',
  username: 'ユーザー名',
  kanaName: '氏名（カナ）',
  reservationCount: '予約件数',
  role: 'アクセス権限'
} as const

export const SALON_CELL: Record<string, any> = {
  No: 'No',
  name: 'サロン名',
  stars: '評点',
  address: '住所',
  reservationCount: '予約件数',
  stylistCount: '登録スタイリスト数',
  tell: '電話番号'
} as const

export const STYLELIST_CELL: Record<string, any> = {
  name: 'スタイリスト名',
  price: '指名料',
  reservationCount: '予約件数'
} as const

export const RESERVATION_CELL = [
  { column: '店舗名', key: 'shopName' },
  { column: '予約者', key: 'userName' },
  { column: 'メニュー名', key: 'menuName' },
  { column: 'スタイリスト名', key: 'stylistName' },
  { column: '予約日', key: 'reservationDate' },
  { column: 'ステータス', key: 'status' }
] as const

export const MENU_CELL: Record<string, any> = {
  name: 'メニュー名',
  price: '値段',
  duration: '時間'
} as const
