import { Area, City, Prefecture } from '@entity/Location'
import { Menu } from '@entity/Menu'
import { Stylist } from '@entity/Stylist'

export type TShopSchedule = {
  days: number[]
  endTime: string
  startTime: string
}

export type TShopList = {
  id: number
  name?: string | null
  address?: string | null
  phoneNumber?: string | null
  area?: Area | null
  prefecture?: Prefecture | null
  city?: City | null
  reservationCount?: number | null
  stylistCount?: number | null
}

export type TShop = {
  id: number
  name?: string | null
  address?: string | null
  phoneNumber?: string | null
  area?: Area | null
  prefecture?: Prefecture | null
  city?: City | null
  menu?: Menu | null
  schedule?: TShopSchedule
  stylists?: Stylist[] | null
  details?: string
}
