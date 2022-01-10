//-----------------------------------------------
// stylist
//-----------------------------------------------
import instance from '@utils/api'
import { AxiosResponse } from 'axios'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import {
  InsertStylistQuery,
  StylistListResponse,
  StylistResponse,
  UpdateStylistQuery
} from '@utils/api/request-response-types/Shop'

export const fetchAll = async (
  shopId: number,
  page: number,
  order: 'asc' | 'desc'
): Promise<AxiosResponse<StylistListResponse>> => {
  return await instance.get<StylistListResponse>(
    `${baseEndpoint.shops}/${shopId}/stylist?page=${page}&order=${order}`
  )
}

export const getStylist = async (
  shopId: number,
  stylistId: number
): Promise<AxiosResponse<StylistResponse>> => {
  return await instance.get<StylistResponse>(
    `${baseEndpoint.shops}/${shopId}/stylist/${stylistId}`
  )
}

export const createStylist = async (
  stylistData: InsertStylistQuery
): Promise<AxiosResponse<string>> => {
  return await instance.post<string>(
    `${baseEndpoint.shops}}/${stylistData.shopId}/stylist`,
    {
      ...stylistData
    }
  )
}

export const patchStylist = async (
  stylistData: UpdateStylistQuery
): Promise<AxiosResponse<string>> => {
  return await instance.patch<string>(
    `${baseEndpoint.shops}/${stylistData.shopId}/stylist/${stylistData.stylistId}`,
    { ...stylistData }
  )
}

export const deleteStylist = async (
  shopId: number,
  stylistId: number
): Promise<AxiosResponse<string>> => {
  return await instance.delete<string>(
    `${baseEndpoint.shops}/${shopId}/stylist/${stylistId}`
  )
}

const stylist = {
  fetchAll,
  getStylist,
  createStylist,
  patchStylist,
  deleteStylist
}

export default stylist
