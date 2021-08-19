import { Area, City, Prefecture } from '../../entities/Location'
import { User } from '../../entities/User'

export const DASHBOARD_REQUEST_START = 'DASHBOARD_REQUEST_START' as const

export const DASHBOARD_REQUEST_SUCCESS = 'DASHBOARD_REQUEST_SUCCESS' as const

export type DashboardShop = {
  name: string
  address: string
  area: Area[]
  city: City[]
  prefecture: Prefecture[]
  id: number
  reservationsCount: number
  stylistsCount: number
  phoneNumber: number
}

export type DashBoardResponseType = {
  user: { users: User[], totalCount: number }
  shop: { shopData: DashboardShop[], totalCount: number }
}

export type DashBoardState = {
  loading: boolean
  data: DashBoardResponseType
}