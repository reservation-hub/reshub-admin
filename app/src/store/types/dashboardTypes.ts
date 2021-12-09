import { salonIndexAdminResponse, salonIndexShopStaffResponse } from '@/utils/api/request-response-types/Dashboard'

export const DASHBOARD_REQUEST_START = 'DASHBOARD_REQUEST_START' as const

export const DASHBOARD_REQUEST_SUCCESS = 'DASHBOARD_REQUEST_SUCCESS' as const

export type DashBoardState = {
  loading: boolean
  data: salonIndexShopStaffResponse & salonIndexAdminResponse
}
