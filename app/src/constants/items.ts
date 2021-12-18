import { TMenu, TMenuForDetail, TMenuForList } from '@model/Menu'
import { TReservationForDetail, TReservationForList } from '@model/Reservation'
import { TShopForDetails, TShopForList } from '@model/Shop'
import { TStylistForDetail, TStylistForList } from '@model/Stylist'
import { TUserForDetail, TUserForList } from '@model/User'

export interface Items {
  users?: TUserForList[]
  user?: TUserForList
  shops?: TShopForList[]
  shop?: TShopForList
  reservations?: TReservationForList[]
  reservation?: TReservationForList
  stylists?: TStylistForList[]
  stylist?: TStylistForList
  menus?: TMenuForList[]
  menu?: TMenuForList
}

export interface DetailItems {
  user?: TUserForDetail
  shop?: TShopForDetails
  reservation?: TReservationForDetail
  stylist?: TStylistForDetail
  menu?: TMenuForDetail
}
