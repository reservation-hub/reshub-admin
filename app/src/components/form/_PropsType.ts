import { User } from '../../entities/User'
import { Shop } from '../../entities/Shop'
import { ChangeEventHandler, FormEventHandler } from 'react'
import { TValid } from '../../utils/useValidation'

export type TUserInput = {
  email: string
  lastNameKanji: string
  firstNameKanji: string
  lastNameKana: string
  firstNameKana: string
  password: string
  confirm: string
  gender: string
  birthdayY: string
  birthdayM: string
  birthdayD: string
  username: string
  role: string
}

export type TFormState = {
  user?: User
  shop?: Shop
}

export interface IUserForm {
  validation?: object,
  submitHandler: FormEventHandler<HTMLFormElement>
  formValue: TUserInput
  formState?: TFormState
  changeHandler: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  error: TValid
}

export interface IFormType {
  title?: string
}