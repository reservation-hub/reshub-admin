export const VALID_TYPE = {
  EMAIL: 'email',
  PASSWORD: 'password',
  CONFIRM: 'confirm',
  FIRST_NAME_KANA: 'firstNameKana',
  LAST_NAME_KANA: 'lastNameKana'
} as const

export const VALID_REGEX = {
  EMAIL: /^[a-zA-Z0-9-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d~!@#$%^&*()+|=]{8,}$/,
  CONFIRM: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d~!@#$%^&*()+|=]{8,}$/,
  KANA_NAME: /^[\u30A0-\u30FF]+$/
} as const

export const VALIDATION_TEXT = {
  EMAIL: '正しいメールアドレスを入力してください。',
  PASSWORD: '英数字を含む８文字以上で入力してください。',
  KANA_NAME: 'カタカナで入力してください。',
  DUPLICATED: 'パスワードが一致していません。',
  AUTHENTICATED_ERROR: '権限がありません。',
  INVALID_ERROR:
    'メールアドレスかパスワードが伴っています。 もう一度ご確認の上、再度お試しください。',
  IS_EMPTY: 'この項目は必須です。',
  PHONE_NUMBER_ERROR: '正しい電話番号を入力してください。',
  INVALID_NUMBER: '半額数字で入力してください。'
} as const
