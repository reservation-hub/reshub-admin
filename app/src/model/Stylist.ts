import { Shop } from '@/entities/Shop'
import { TReservation } from './Reservation'

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
  shop?: Shop
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
