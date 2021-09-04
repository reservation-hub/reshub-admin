import { Area, City, Prefecture } from '../entities/Location'
import { Menu } from '../entities/Menu'
import { Stylist } from '../entities/Stylist'
import { ShopSchedule } from '../entities/Shop'

export type ShopList = {
  id: number,
  name?: string | null,
  address?: string | null,
  phoneNumber?: string | null,
  area?: Area | null,
  prefecture?: Prefecture | null,
  city?: City | null,
  reservationCount?: number | null,
  stylistCount?: number | null
}

export type Shop = {
  id: number,
  name?: string | null,
  address?: string | null,
  phoneNumber?: string | null,
  area?: Area | null,
  prefecture?: Prefecture | null,
  city?: City | null,
  menu?: Menu | null
  schedule?: ShopSchedule,
  stylists?: Stylist[] | null,
}