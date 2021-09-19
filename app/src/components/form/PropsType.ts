import { User } from '../../entities/User'
import { Shop } from '../../entities/Shop'
import React from 'react'
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

export interface IUserForm {
  validation?: object
  onSubmit: React.FormEventHandler<HTMLFormElement>
  formValue: TUserInput
  formState?: TFormState
  changeHandlers: {
    changeHandler: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    selectHandler: (e: React.ChangeEvent<{ value: unknown }>) => void
  }
  error: TValid
}

export type FormType = {
  title?: string
}

export type TFormState = {
  user?: User
  shop?: Shop
}