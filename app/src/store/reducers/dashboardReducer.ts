import { DASHBOARD_REQUEST_SUCCESS } from '../types/dashboardTypes'
import { dataType } from '../actions/dashboardAction'

const initialState = {
  loading: true,
  data: {} as dataType
}

const dashboardReducer = (
  state= initialState,
  action: any
) => {
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