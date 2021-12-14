import { DashBoardState, DASHBOARD_TYPE } from '@store/types/dashboardTypes'
import { DashboardAction } from '@store/actions/dashboardAction'
import {
  salonIndexAdminResponse,
  salonIndexShopStaffResponse
} from '@/utils/api/request-response-types/Dashboard'
import { TAdminDashboard, TStaffDashbaord } from '@/model/Dashboard'

const initialState: DashBoardState = {
  loading: false,
  data: {} as TStaffDashbaord & TAdminDashboard
}

const dashboardReducer = (state = initialState, action: DashboardAction) => {
  switch (action.type) {
    case DASHBOARD_TYPE.REQUEST_START:
      return {
        ...state,
        loading: false
      }
    case DASHBOARD_TYPE.REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    default:
      return state
  }
}

export default dashboardReducer
