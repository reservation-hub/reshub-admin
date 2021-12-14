import { MenuItem } from '@/entities/Menu'
import { Reservation } from '@/entities/Reservation'
import { Shop } from '@/entities/Shop'
import { Stylist } from '@/entities/Stylist'
import { User } from '@/entities/User'
import { ShopIndex } from '@/utils/api/request-response-types/Shop'

export interface Items {
  users?: User[]
  user?: User
  shops?: ShopIndex[] | Shop[]
  shop?: ShopIndex
  reservations?: Reservation[]
  reservation?: Reservation
  stylists?: Stylist[]
  stylist?: Stylist
  menus?: MenuItem[]
  menu?: MenuItem
}
