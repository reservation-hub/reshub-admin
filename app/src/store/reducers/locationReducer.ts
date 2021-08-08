//----------------------------------
// redux reducer エリア情報管理
//----------------------------------

import { LOCATION_REQUEST_SUCCESS } from '../types/locationTypes'

import { LocationAction } from '../actions/locationAction'

const initialState = {
  loading: true,
  location: []
}

const locationReducer = (state = initialState, action: LocationAction) => {
  switch (action.type) {
    case LOCATION_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        location: action.payload
      }
    default:
      return state
  }
}

export default locationReducer