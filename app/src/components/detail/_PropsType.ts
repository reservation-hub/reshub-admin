import { Items } from '@/constants/items'
import { Menu } from '@/entities/Menu'
import { TShopForDetails } from '@/model/Shop'
import {
  ReservationForList,
  StylistForList
} from '@/utils/api/request-response-types/Dashboard'
import { User } from '@entities/User'

export interface IDetailItems {
  user?: User
  shop?: TShopForDetails
  stylist?: StylistForList[]
  reservation?: ReservationForList[]
  menu?: Menu[]
}

export interface IDetailProps extends IDetailItems {
  modalOpenHandler?: () => void
  subModalHandler?: () => void
}
