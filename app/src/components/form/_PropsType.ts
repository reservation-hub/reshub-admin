import { FormEventHandler } from 'react'
import { ShopResponse } from '@utils/api/request-response-types/Shop'
import { RoleSlug } from '@utils/api/request-response-types/models/Role'
import { Gender } from '@utils/api/request-response-types/models/User'
import { UserResponse } from '@utils/api/request-response-types/User'
import { Control } from 'react-hook-form'

export type TUserInput = {
  email: string
  lastNameKanji: string
  firstNameKanji: string
  lastNameKana: string
  firstNameKana: string
  password: string
  confirm: string
  gender: Gender
  birthdayY: string
  birthdayM: string
  birthdayD: string
  username: string
  role: RoleSlug
}

export type TFormState = {
  user?: UserResponse
  shop?: ShopResponse
}

export interface IFormProps<T> {
  formState?: TFormState
  error?: Record<string, any>
  control?: Control<T>
  submitHandler: FormEventHandler<HTMLFormElement>
}
