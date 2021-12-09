import {
  DASHBOARD_REQUEST_SUCCESS,
  DashBoardState,
  DASHBOARD_REQUEST_START
} from '@store/types/dashboardTypes'
import { DashboardAction } from '@store/actions/dashboardAction'
import {
  salonIndexAdminResponse,
  salonIndexShopStaffResponse
} from '@/utils/api/request-response-types/Dashboard'

const initialState: DashBoardState = {
  loading: false,
  data: {} as salonIndexShopStaffResponse & salonIndexAdminResponse
}

const dashboardReducer = (state = initialState, action: DashboardAction) => {
  switch (action.type) {
    case DASHBOARD_REQUEST_START:
      return {
        ...state,
        loading: false
      }
    case DASHBOARD_REQUEST_SUCCESS:
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
