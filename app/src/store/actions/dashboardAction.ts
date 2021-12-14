import { DASHBOARD_TYPE } from '@store/types/dashboardTypes'
import { RootState, typedAction } from '@store/store'
import { ThunkAction } from 'redux-thunk'
import apiEndpoint from '@utils/api/apiEndpoint'
import history from '@utils/routes/history'
import { TAdminDashboard, TStaffDashbaord } from '@/model/Dashboard'

const dashboardRequestStart = () => {
  return typedAction(DASHBOARD_TYPE.REQUEST_START)
}

const dashboardRequestSuccess = (data: TStaffDashbaord & TAdminDashboard) => {
  return typedAction(DASHBOARD_TYPE.REQUEST_SUCCESS, data)
}

export const fetchDashboard =
  (): ThunkAction<void, RootState, null, DashboardAction> =>
  async (dispatch) => {
    dispatch(dashboardRequestStart())
    try {
      const res = await apiEndpoint.getDashboard()
      dispatch(dashboardRequestSuccess(res.data))
    } catch (e) {
      history.push('/error')
    }
  }

export type DashboardAction =
  | ReturnType<typeof dashboardRequestStart>
  | ReturnType<typeof dashboardRequestSuccess>
