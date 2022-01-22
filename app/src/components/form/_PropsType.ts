import { FormEventHandler } from 'react'
import {
  MenuResponse,
  ReservationResponse,
  ShopResponse,
  StylistResponse
} from '@utils/api/request-response-types/Shop'
import { UserResponse } from '@utils/api/request-response-types/User'
import { Control } from 'react-hook-form'
import { OnClickProps } from '@components/common/_PropsType'

export type TFormState = {
  user?: UserResponse
  shop?: ShopResponse
  stylist?: StylistResponse
  menu?: MenuResponse
  reservation?: ReservationResponse
  option?: number
}

export interface IFormProps<T> extends OnClickProps {
  formState?: TFormState
  error?: Record<string, any>
  control?: Control<T>
  submitHandler: FormEventHandler<HTMLFormElement>
}
