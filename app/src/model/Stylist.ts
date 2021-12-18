import { TReservation } from './Reservation'
import { TShop } from './Shop'

export type TStylistSchedule = {
  days: number[]
  startTime: string
  endTime: string
}

export type TStylist = {
  id: number
  name: string
  price: number
  shopId?: number
  shop?: TShop
  reservation?: TReservation[]
  schedule?: TStylistSchedule
}

export type TStylistForList = Pick<TStylist, 'id' | 'name' | 'price'> & {
  reservationCount: number
}

export type TStylistForDetail = Pick<
  TStylist,
  'id' | 'name' | 'price' | 'schedule' | 'shop'
> & { reservationCount: number }
