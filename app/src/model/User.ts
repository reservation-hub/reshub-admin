import { User } from '@/entities/User'

export const GENDER = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
} as const

export type TRole = {
  id: number
  name: string
  description: string
  slug: string
}

export type TOauthIds = {
  id: number
  googleId: string | null
  facebookId: string | null
}

export type TUser = {
  id: number
  username?: string
  password?: string
  email: string
  gender?: typeof GENDER[keyof typeof GENDER]
  firstNameKanji?: string
  lastNameKanji?: string
  firstNameKana?: string
  lastNameKana?: string
  birthday?: Date
  role: TRole
  oAuthIds?: TOauthIds
}

export type TUserForList = Pick<
  User,
  'id' | 'username' | 'email' | 'firstNameKana' | 'lastNameKana' | 'role'
> & { ReservationCount: number }
