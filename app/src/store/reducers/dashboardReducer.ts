import { DASHBOARD_REQUEST_SUCCESS, DashBoardResponseType, DashBoardState } from '@store/types/dashboardTypes'
import { DashboardAction } from '@store/actions/dashboardAction'

const initialState: DashBoardState = {
  loading: true,
  data: {} as DashBoardResponseType
}

const dashboardReducer = (state = initialState, action: DashboardAction) => {
  switch (action.type) {
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
