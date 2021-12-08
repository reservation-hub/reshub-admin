import {
  DASHBOARD_REQUEST_SUCCESS,
  DashBoardResponseType,
  DashBoardState,
  DASHBOARD_REQUEST_START
} from '@store/types/dashboardTypes'
import { DashboardAction } from '@store/actions/dashboardAction'

const initialState: DashBoardState = {
  loading: false,
  data: {} as DashBoardResponseType
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
