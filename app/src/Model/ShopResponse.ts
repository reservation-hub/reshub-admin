import { Area, City, Prefecture } from '@entity/Location'
import { Menu } from '@entity/Menu'
import { Stylist } from '@entity/Stylist'
import { ShopSchedule } from '@entity/Shop'

export type ShopList = {
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

export type Shop = {
  id: number
  name?: string | null
  address?: string | null
  phoneNumber?: string | null
  area?: Area | null
  prefecture?: Prefecture | null
  city?: City | null
  menu?: Menu | null
  schedule?: ShopSchedule
  stylists?: Stylist[] | null
}
