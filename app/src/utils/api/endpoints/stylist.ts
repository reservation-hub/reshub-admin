//-----------------------------------------------
// stylist
//-----------------------------------------------
import { TStylistForDetail } from '@/model/Stylist'
import instance from '@utils/api'
import {
  insertStylistQuery,
  updateStylistQuery
} from '@utils/api/request-response-types/ShopService'
import { AxiosResponse } from 'axios'
import { baseEndpoint } from '../apiEndpoint'

export const getStylists = async () => await instance.get('/stylists')

export const getStylist = async (
  shopId: number,
  id: number
): Promise<AxiosResponse<TStylistForDetail>> =>
  await instance.get<TStylistForDetail>(
    `${baseEndpoint.shops}/${shopId}/stylists/${id}`
  )

export const createStylist = async (
  stylistData: insertStylistQuery
): Promise<AxiosResponse<TStylistForDetail>> =>
  await instance.post<TStylistForDetail>(
    `${baseEndpoint.shops}}/${stylistData.shopId}/stylists`,
    {
      ...stylistData
    }
  )
export const patchStylist = async (
  stylistData: updateStylistQuery
): Promise<AxiosResponse<TStylistForDetail>> =>
  await instance.patch<TStylistForDetail>(
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
