import { User } from '@/entities/User'
import { TMenu } from './Menu'
import { TShop } from './Shop'
import { TStylist } from './Stylist'

export enum ReservationStatus {
  RESERVED = 'Reserved',
  CANCELLED = 'Cancelled',
  COMPLETED = 'Completed'
}

export type TReservation = {
  id: number
  shop?: TShop
  reservationDate: Date
  user: User
  status: ReservationStatus
  stylist?: TStylist
  menuItem: TMenu
}

export type TReservationForList = Pick<
  TReservation,
  'id' | 'shop' | 'user' | 'stylist' | 'menuItem' | 'status'
>
