import { User } from '@entities/User'
import { ChangeEvent, ChangeEventHandler, FormEventHandler } from 'react'
import { TValid } from '@utils/hooks/useValidation'
import { TShop } from '@Model/ShopResponse'

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

export type TSalonInput = {
  name: string
  address: string
  phoneNumber: string
  cityId: string
  prefectureId: string
  areaId: string
  startTime: { hour: string; minute: string }
  endTime: { hour: string; minute: string }
  days: number[]
  details: string
}

export type TChangeHandle = {
  input: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  check?: ChangeEventHandler<HTMLInputElement>
  startAt?: (e: ChangeEvent<HTMLSelectElement>) => void
  endAt?: (e: ChangeEvent<HTMLSelectElement>) => void
}

export type TFormState = {
  user?: User
  shop?: TShop
}

export interface IUserFormProps {
  validation?: Record<string, any>
  submitHandler: FormEventHandler<HTMLFormElement>
  formValue: TUserInput
  formState?: TFormState
  changeHandler: TChangeHandle
  error: TValid
}

export interface ISalonFormProps {
  submitHandler: FormEventHandler<HTMLFormElement>
  formValue: TSalonInput
  formState?: TFormState
  changeHandlers: TChangeHandle
}

export interface IFormType {
  title?: string
}
