import { TMenu } from './Menu'
import { TShop } from './Shop'
import { TStylist } from './Stylist'
import { TUserForDetail } from './User'

export enum ReservationStatus {
  RESERVED = 'Reserved',
  CANCELLED = 'Cancelled',
  COMPLETED = 'Completed'
}

export type TReservation = {
  id: number
  shop?: TShop
  reservationDate: Date
  user: TUserForDetail
  status: ReservationStatus
  stylist?: TStylist
  menuItem: TMenu
}

export type TReservationForList = Pick<TReservation, 'id' | 'status'> & {
  clientName: string
  menuItemName: string
  shopName: string
  stylistName: string
}

export type TReservationForDetail = Pick<
  TReservation,
  'id' | 'shop' | 'user' | 'menuItem' | 'status' | 'stylist' | 'reservationDate'
>
