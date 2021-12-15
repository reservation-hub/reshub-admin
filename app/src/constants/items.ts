import { TMenu } from '@model/Menu'
import { TReservationForList } from '@model/Reservation'
import { TShopForList } from '@model/Shop'
import { TStylistForList } from '@model/Stylist'
import { TUserForList } from '@model/User'

export interface Items {
  users?: TUserForList[]
  user?: TUserForList
  shops?: TShopForList[]
  shop?: TShopForList
  reservations?: TReservationForList[]
  reservation?: TReservationForList
  stylists?: TStylistForList[]
  stylist?: TStylistForList
  menus?: TMenu[]
  menu?: TMenu
}
