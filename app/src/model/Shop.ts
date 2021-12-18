import { TArea, TCity, TPrefecture } from './Location'
import { TMenu } from './Menu'
import { TReservation, TReservationForList } from './Reservation'
import { TStylist, TStylistForList } from './Stylist'

export type TShopSchedule = {
  days: number[]
  startTime: string
  endTime: string
}

export type TShop = {
  id: number
  name: string
  stylist: TStylist[]
  address?: string
  phoneNumber?: string
  menu: TMenu
  details?: string
  schedule?: TShopSchedule
  reservations?: TReservation[]
  area?: TArea
  prefecture?: TPrefecture
  city?: TCity
}

export type TShopForList = Pick<
  TShop,
  'id' | 'name' | 'phoneNumber' | 'address'
> & {
  prefectureName: string
  cityName: string
  stylistsCount: number
  reservationsCount: number
}

export type TShopForDetails = Pick<
  TShop,
  'id' | 'address' | 'schedule' | 'name' | 'details' | 'phoneNumber'
> & {
  stylists: TStylistForList[]
  reservations: TReservationForList[]
  menu: { id: number; items: TMenu[] }
}
