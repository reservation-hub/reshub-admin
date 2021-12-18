//-----------------------------------------------
// location
//-----------------------------------------------
import instance from '@utils/api'
import { AxiosResponse } from 'axios'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import {
  AreaPrefecturesResponse,
  PrefectureCitiesResponse
} from '@utils/api/request-response-types/Location'
import { Area } from '@utils/api/request-response-types/models/Location'

export const getAreas = async (): Promise<AxiosResponse<Area[]>> =>
  await instance.get(baseEndpoint.area)

export const getArea = async (
  id: number
): Promise<AxiosResponse<AreaPrefecturesResponse>> =>
  await instance.get<AreaPrefecturesResponse>(
    `${baseEndpoint.area}/${id}${baseEndpoint.prefecture}`
  )

export const getPrefecture = async (
  id: number
): Promise<AxiosResponse<PrefectureCitiesResponse>> =>
  await instance.get<PrefectureCitiesResponse>(
    `${baseEndpoint.prefecture}/${id}/cities`
  )

const location = {
  getAreas,
  getArea,
  getPrefecture
}

export default location
