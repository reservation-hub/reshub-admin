import { Reservation } from '@/entities/Reservation'
import { Shop } from '@/entities/Shop'
import { Stylist } from '@/entities/Stylist'
import { ShopIndex } from '@/utils/api/request-response-types/Shop'
import { User } from '@entities/User'

export interface Items {
  users?: User[]
  user?: User
  shops?: ShopIndex[] | Shop[]
  shop?: ShopIndex
  reservations?: Reservation[]
  reservation?: Reservation
  stylists?: Stylist[]
  stylist?: Stylist
}

export interface IListProps extends Items {
  modalOpenHandler?: () => void
  order?: React.Dispatch<React.SetStateAction<boolean>>
  correct?: boolean
  admin?: boolean
}

export type TCurrentPage = {
  currentPage: number
}
