import { User } from '../../entities/User'
import { Shop } from '../../entities/Shop'
import { ChangeEvent, ChangeEventHandler, FormEventHandler } from 'react'
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

export type TSalonInput = {
  name: string
  address: string
  phoneNumber: string
  cityId: string
  prefectureId: string
  areaId: string
  startTime: { hour: string, minute: string }
  endTime: { hour: string, minute: string }
  days: number[]
}

export type TFormState = {
  user?: User
  shop?: Shop
}

export interface IUserFormProps {
  validation?: object,
  submitHandler: FormEventHandler<HTMLFormElement>
  formValue: TUserInput
  formState?: TFormState
  changeHandler: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  error: TValid
}

export interface ISalonFormProps {
  submitHandler: FormEventHandler<HTMLFormElement>
  formValue: TSalonInput
  formState?: TFormState
  changeHandler: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  checkHandler: ChangeEventHandler<HTMLInputElement>
  startAt: { hour: number, minute: number, HHmm: string, changeHandler: (e: ChangeEvent<HTMLSelectElement>) => void }
  endAt: { hour: number, minute: number, HHmm: string, changeHandler: (e: ChangeEvent<HTMLSelectElement>) => void }
  selectArea: { option: string, changeHandler: (e: ChangeEvent<{ value: unknown }>) => void }
  selectPref: { option: string, changeHandler: (e: ChangeEvent<{ value: unknown }>) => void }
  selectCity: { option: string, changeHandler: (e: ChangeEvent<{ value: unknown }>) => void }
}

export interface IFormType {
  title?: string
}