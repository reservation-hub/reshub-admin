import { Area } from '@entities/Location'
import {
  fetchModelsWithTotalCountResponse,
  modelResponse
} from '@utils/api/request-response-types/ServiceCommonTypes'
import {
  AreaPrefecturesResponse,
  PrefectureCitiesResponse
} from '@utils/api/request-response-types/Location'

export const GET_CITY_SUCCESS = 'GET_CITY_SUCCESS' as const

export const GET_AREA_SUCCESS = 'GET_AREA_SUCCESS' as const

export const GET_PREF_SUCCESS = 'GET_PREF_SUCCESS' as const

export type LocationState = {
  area: fetchModelsWithTotalCountResponse<modelResponse<Area>>
  prefecture: AreaPrefecturesResponse
  city: PrefectureCitiesResponse
}
