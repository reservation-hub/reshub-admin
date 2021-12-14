export const USER_CELL: Record<string, any> = {
  No: 'No',
  email: 'メールアドレス',
  kanjiName: '氏名（漢字）',
  kanaName: '氏名（カナ）',
  birthday: '生年月日',
  gender: '性別',
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

export const RESERVATION_CELL: Record<string, any> = {
  shopName: '店舗名',
  userName: '予約者',
  menuName: 'メニュー名',
  stylistName: 'スタイリスト名',
  status: 'ステータス'
} as const

export const MENU_CELL: Record<string, any> = {
  name: 'メニュー名',
  price: '値段',
  stylist: '対応可能'
} as const
