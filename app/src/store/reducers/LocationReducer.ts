import { LocationState, LOCATION_TYPE } from '@store/types/LocationTypes'
import { LocationAction } from '@store/actions/LocationAction'
import {
  AreaPrefecturesResponse,
  PrefectureCitiesResponse
} from '@utils/api/request-response-types/Location'
import { Area } from '@utils/api/request-response-types/models/Location'

const initialState: LocationState = {
  loading: false,
  area: {} as Area[],
  prefecture: {} as AreaPrefecturesResponse,
  city: {} as PrefectureCitiesResponse
}

const locationReducer = (state = initialState, action: LocationAction) => {
  switch (action.type) {
    case LOCATION_TYPE.REQUEST_START:
      return {
        ...state,
        loading: true
      }
    case LOCATION_TYPE.GET_AREA_SUCCESS:
      return {
        ...state,
        loading: false,
        area: action.payload
      }
    case LOCATION_TYPE.GET_PREF_SUCCESS:
      return {
        ...state,
        loading: false,
        prefecture: action.payload
      }
    case LOCATION_TYPE.GET_CITY_SUCCESS:
      return {
        ...state,
        loading: false,
        city: action.payload
      }
    default:
      return state
  }
}

export default locationReducer
