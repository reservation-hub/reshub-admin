import { MenuItem } from '@/entities/Menu'
import { TReservationForList } from '@/model/Reservation'
import { TShop, TShopForList } from '@/model/Shop'
import { TStylistForList } from '@/model/Stylist'
import { TUserForList } from '@/model/User'
import {
  salonIndexShopStaffResponse,
  StylistForList,
  UserForList
} from '@/utils/api/request-response-types/Dashboard'

export interface Items {
  users?: TUserForList[]
  user?: TUserForList
  shops?: TShopForList[]
  shop?: TShopForList
  reservations?: TReservationForList[]
  reservation?: TReservationForList
  stylists?: TStylistForList[]
  stylist?: TStylistForList
  menus?: MenuItem[]
  menu?: MenuItem
}
