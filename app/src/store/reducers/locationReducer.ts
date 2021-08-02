//----------------------------------
// redux reducer エリア情報管理
//----------------------------------

import { 
  LOCATION_REQUEST_SUCCESS
} from '../types/locationTypes'

const initialState = {
  location: null
}

export const locationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOCATION_REQUEST_SUCCESS:
      return { 
        ...state, 
        location: action.payload 
      }
    default:
      return state
  }
}
