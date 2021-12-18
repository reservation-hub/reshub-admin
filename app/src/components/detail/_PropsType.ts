import { TShopForDetails } from '@model/Shop'
import { TUserForDetail } from '@model/User'
import { TStylistForDetail } from '@model/Stylist'
import { TReservationForDetail } from '@model/Reservation'
import { TMenuForDetail } from '@model/Menu'

export interface IDetailItems {
  user?: TUserForDetail
  shop?: TShopForDetails
  stylist?: TStylistForDetail
  reservation?: TReservationForDetail
  menu?: TMenuForDetail
}

export interface IDetailProps extends IDetailItems {
  modalOpenHandler?: () => void
  subModalHandler?: () => void
}
