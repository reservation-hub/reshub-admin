import { User } from '../../entities/User'
import { ShopList } from '../../Model/ShopResponse'

export const DASHBOARD_REQUEST_START = 'DASHBOARD_REQUEST_START' as const

export const DASHBOARD_REQUEST_SUCCESS = 'DASHBOARD_REQUEST_SUCCESS' as const

export type DashBoardResponseType = {
  user: { users: User[], totalCount: number }
  shop: { shopData: ShopList[], totalCount: number }
}

export type DashBoardState = {
  loading: boolean
  data: DashBoardResponseType
}