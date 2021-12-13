import { Reservation } from '@/entities/Reservation'
import { Shop } from '@/entities/Shop'
import { Stylist } from '@/entities/Stylist'
import { User } from '@entities/User'

export interface Items {
  users?: User[]
  user?: User
  shops?: Shop[]
  shop?: Shop
  reservations?: Reservation[]
  reservation?: Reservation
  stylists?: Stylist[]
  stylist?: Stylist
}

export interface IListProps extends Items {
  modalOpenHandler?: () => void
  order?: React.Dispatch<React.SetStateAction<boolean>>
  correct?: boolean
}

export type TCurrentPage = {
  currentPage: number
}
