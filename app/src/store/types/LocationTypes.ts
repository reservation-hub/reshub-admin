import { Area } from '@entity/Location'
import {
  fetchModelsWithTotalCountResponse,
  modelResponse
} from '@utils/api/request-response-types/ServiceCommonTypes'
import { CityResponse, PrefResponse } from '@Model/LocationResponse'

export const GET_CITY_SUCCESS = 'GET_CITY_SUCCESS' as const

export const GET_AREA_SUCCESS = 'GET_AREA_AREA' as const

export const GET_PREF_SUCCESS = 'GET_PREF_SUCCESS' as const

export type LocationState = {
  area: fetchModelsWithTotalCountResponse<modelResponse<Area>>
  prefecture: PrefResponse
  city: CityResponse
}
