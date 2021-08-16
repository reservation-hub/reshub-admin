import { DASHBOARD_REQUEST_START, DASHBOARD_REQUEST_SUCCESS } from '../types/dashboardTypes'
import { AppDispatch, RootState, typedAction } from '../store'
import { Shop } from '../../entities/Shop'
import { User } from '../../entities/User'
import { getDashboard } from '../../utils/api/apiEndpoint'

import history from '../../utils/history'

export type dataType = {
  data: { user: User[], shop: Shop[] }
}

const dashboardRequestStart = () => {
  return typedAction(DASHBOARD_REQUEST_START)
}

const dashboardRequestSuccess = (data: dataType) => {
  return typedAction(DASHBOARD_REQUEST_SUCCESS, data)
}

export const fetchDashboard = () =>
  async (dispatch: AppDispatch, getState: () => RootState) => {

  dispatch(dashboardRequestStart())
  try {
    const res = await getDashboard()
    dispatch(dashboardRequestSuccess(res.data))
  } catch (e) {
    history.push('/error')
  }

}

export type DashboardAction =
  ReturnType<typeof dashboardRequestStart
    | typeof dashboardRequestSuccess>