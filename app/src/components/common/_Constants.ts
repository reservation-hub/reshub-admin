export const UserCell: {} = {
  No: 'No',
  email: 'メールアドレス',
  kanjiName: '氏名（漢字）',
  kanaName: '氏名（カナ）',
  birthday: '生年月日',
  gender: '性別',
  role: 'アクセス権限'
}

export const SalonCell: {} = {
  No: 'No',
  name: 'サロン名',
  stars: '評点',
  address: '住所',
  reservationCount: '予約件数',
  stylistCount: '登録スタイリスト数',
  tell: '電話番号'
}

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

export const HeaderType = {
  LIST: 'list',
  DETAIL: 'detail'
} as const