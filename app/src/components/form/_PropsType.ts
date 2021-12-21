import { ChangeEvent, ChangeEventHandler, FormEventHandler } from 'react'
import { TShop } from '@model/Shop'
import { TUser } from '@model/User'
import { ShopResponse } from '@/utils/api/request-response-types/Shop'

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

export type TChangeHandler = {
  input: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  check?: ChangeEventHandler<HTMLInputElement>
  startAt?: (e: ChangeEvent<HTMLSelectElement>) => void
  endAt?: (e: ChangeEvent<HTMLSelectElement>) => void
}

export type TFormState = {
  user?: TUser
  shop?: ShopResponse
}

export interface IFormProps {
  changeHandlers: TChangeHandler
  formState?: TFormState
  submitHandler: FormEventHandler<HTMLFormElement>
}

export interface IFormType {
  title?: string
}
