import { FormEventHandler } from 'react'
import {
  MenuResponse,
  ShopResponse,
  StylistResponse
} from '@utils/api/request-response-types/Shop'
import { UserResponse } from '@utils/api/request-response-types/User'
import { Control } from 'react-hook-form'
import { ClassesAndChildren } from '../common/_PropsType'

export type TFormState = {
  user?: UserResponse
  shop?: ShopResponse
  stylist?: StylistResponse
  menu?: MenuResponse
  option?: number
}

export interface IFormProps<T> extends ClassesAndChildren {
  formState?: TFormState
  error?: Record<string, any>
  control?: Control<T>
  submitHandler: FormEventHandler<HTMLFormElement>
}
