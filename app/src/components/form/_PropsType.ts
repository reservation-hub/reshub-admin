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
import { TagResponse } from '@/utils/api/request-response-types/Tag'

export type TFormState = {
  user?: UserResponse
  shop?: ShopResponse
  stylist?: StylistResponse
  menu?: MenuResponse
  reservation?: ReservationResponse
  tag?: TagResponse
  option?: number
}

export interface IFormProps<T> extends OnClickProps {
  formState?: TFormState
  error?: Record<string, any>
  control?: Control<T>
  defaultValue?: Record<string, any>
  submitHandler: FormEventHandler<HTMLFormElement>
}
