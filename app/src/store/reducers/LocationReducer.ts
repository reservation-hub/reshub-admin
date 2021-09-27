import { GET_AREA_SUCCESS, GET_CITY_SUCCESS, GET_PREF_SUCCESS, LocationState } from '@store/types/LocationTypes'
import { fetchModelsWithTotalCountResponse, modelResponse } from '@utils/api/request-response-types/ServiceCommonTypes'
import { Area } from '@entity/Location'
import { LocationAction } from '@store/actions/LocationAction'
import { CityResponse, PrefResponse } from '@Model/LocationResponse'

const initialState: LocationState = {
  area: {} as fetchModelsWithTotalCountResponse<modelResponse<Area>>,
  prefecture: {} as PrefResponse,
  city: {} as CityResponse
}

const locationReducer = (state = initialState, action: LocationAction) => {
  switch (action.type) {
    case GET_AREA_SUCCESS:
      return {
        ...state,
        area: action.payload
      }
    case GET_PREF_SUCCESS:
      return {
        ...state,
        prefecture: action.payload
      }
    case GET_CITY_SUCCESS:
      return {
        ...state,
        city: action.payload
      }
    default:
      return state
  }
}

export default locationReducer
