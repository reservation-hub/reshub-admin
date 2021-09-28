import {
  DASHBOARD_REQUEST_START,
  DASHBOARD_REQUEST_SUCCESS,
  DashBoardResponseType
} from '@store/types/dashboardTypes'
import { RootState, typedAction } from '@store/store'
import { ThunkAction } from 'redux-thunk'
import apiEndpoint from '@utils/api/apiEndpoint'
import history from '@utils/history'

const dashboardRequestStart = () => {
  return typedAction(DASHBOARD_REQUEST_START)
}

const dashboardRequestSuccess = (data: DashBoardResponseType) => {
  return typedAction(DASHBOARD_REQUEST_SUCCESS, data)
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
