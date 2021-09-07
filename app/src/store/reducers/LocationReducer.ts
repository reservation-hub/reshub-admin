import { GET_AREAS_SUCCESS, GET_ONE_AREA, GET_PREF_SUCCESS, LocationState } from '../types/LocationTypes'
import {
  fetchModelsWithTotalCountResponse,
  modelResponse
} from '../../utils/api/request-response-types/ServiceCommonTypes'
import { Area } from '../../entities/Location'
import { LocationAction } from '../actions/LocationAction'
import { AreaResponse, PrefResponse } from '../../Model/LocationResponse'

const initialState: LocationState = {
  areas: {} as fetchModelsWithTotalCountResponse<modelResponse<Area>>,
  area: {} as AreaResponse,
  prefecture: {} as PrefResponse
}

const locationReducer = (
  state = initialState,
  action: LocationAction
) => {
  switch (action.type) {
    case GET_AREAS_SUCCESS:
      return {
        ...state,
        areas: action.payload
      }
    case GET_ONE_AREA:
      return {
        ...state,
        area: action.payload
      }
    case GET_PREF_SUCCESS:
      return {
        ...state,
        prefecture: action.payload
      }
    default:
      return state
  }
}

export default locationReducer