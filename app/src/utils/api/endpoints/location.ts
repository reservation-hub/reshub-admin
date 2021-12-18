//-----------------------------------------------
// location
//-----------------------------------------------
import { TArea } from '@model/Location'
import instance from '@utils/api'
import { AxiosResponse } from 'axios'
import { baseEndpoint } from '../apiEndpoint'

export const getAreas = async (): Promise<AxiosResponse<TArea[]>> =>
  await instance.get(baseEndpoint.area)

export const getArea = async (id: number) =>
  await instance.get(`${baseEndpoint.area}/${id}${baseEndpoint.prefecture}`)

export const getPrefecture = async (id: number) =>
  await instance.get(`${baseEndpoint.prefecture}/${id}/cities`)

const location = {
  getAreas,
  getArea,
  getPrefecture
}

export default location
