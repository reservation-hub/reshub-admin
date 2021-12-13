import { Items } from '@/constants/items'
import { Menu } from '@/entities/Menu'
import { Reservation } from '@/entities/Reservation'
import { Shop } from '@/entities/Shop'
import { Stylist } from '@/entities/Stylist'
import { User } from '@entities/User'

export interface IDetailItems {
  user?: User
  shop?: Shop
  stylist?: Stylist[]
  reservation?: Reservation[]
  menu?: Menu[]
}

export interface IDetailProps extends Items {
  modalOpenHandler?: () => void
  subModalHandler?: () => void
}
