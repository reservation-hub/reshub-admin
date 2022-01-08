import { ChangeEvent, ChangeEventHandler, FormEventHandler } from 'react'
import { TUser } from '@model/User'
import { ShopResponse } from '@utils/api/request-response-types/Shop'
import { ScheduleDays } from '@utils/api/request-response-types/models/Common'
import { RoleSlug } from '@utils/api/request-response-types/models/Role'
import { Gender } from '@utils/api/request-response-types/models/User'

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

export type TSalonInput = {
  name: string
  address: string
  phoneNumber: string
  cityId: string
  prefectureId: string
  areaId: string
  startTime: { hour: string; minute: string }
  endTime: { hour: string; minute: string }
  days: ScheduleDays[]
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
