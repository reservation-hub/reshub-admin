//-----------------------------------------------
// stylist
//-----------------------------------------------
import instance from '@utils/api'
import { AxiosResponse } from 'axios'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import {
  InsertStylistQuery,
  StylistResponse,
  UpdateStylistQuery
} from '@utils/api/request-response-types/Shop'

export const getStylists = async () => await instance.get('/stylists')

export const getStylist = async (
  shopId: number,
  id: number
): Promise<AxiosResponse<StylistResponse>> =>
  await instance.get<StylistResponse>(
    `${baseEndpoint.shops}/${shopId}/stylists/${id}`
  )

export const createStylist = async (
  stylistData: InsertStylistQuery
): Promise<AxiosResponse<string>> =>
  await instance.post<string>(
    `${baseEndpoint.shops}}/${stylistData.shopId}/stylists`,
    {
      ...stylistData
    }
  )
export const patchStylist = async (
  stylistData: UpdateStylistQuery
): Promise<AxiosResponse<string>> =>
  await instance.patch<string>(
    `${baseEndpoint.shops}/${stylistData.shopId}/stylists/${stylistData.stylistId}`,
    { ...stylistData }
  )
export const deleteStylist = async (
  shopId: number,
  stylistId: number
): Promise<AxiosResponse<string>> =>
  await instance.delete<string>(
    `${baseEndpoint.shops}/${shopId}/stylists/${stylistId}`
  )

const stylist = {
  getStylists,
  getStylist,
  createStylist,
  patchStylist,
  deleteStylist
}

export default stylist
