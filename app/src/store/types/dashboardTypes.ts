import { TAdminDashboard, TStaffDashbaord } from '@model/Dashboard'

export const DASHBOARD_TYPE = {
  REQUEST_START: 'DASHBOARD_REQUEST_START',
  REQUEST_SUCCESS: 'DASHBOARD_REQUEST_SUCCESS',
  REQUSET_FAILURE: 'DASHBOARD_REQUSET_FAILURE'
} as const

export type DashBoardState = {
  loading: boolean
  data: TStaffDashbaord & TAdminDashboard
}
