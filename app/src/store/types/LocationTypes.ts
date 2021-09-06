import { Area } from '../../entities/Location'
import {
  fetchModelsWithTotalCountResponse,
  modelResponse
} from '../../utils/api/request-response-types/ServiceCommonTypes'
import { AreaResponse, PrefResponse } from '../../Model/LocationResponse'

export const GET_AREAS_SUCCESS = 'GET_AREAS_SUCCESS' as const

export const GET_ONE_AREA = 'GET_ONE_AREA' as const

export const GET_PREF_SUCCESS = 'GET_PREF_SUCCESS' as const

export type LocationState = {
  areas: fetchModelsWithTotalCountResponse<modelResponse<Area>>
  area: AreaResponse
  prefecture: PrefResponse
}