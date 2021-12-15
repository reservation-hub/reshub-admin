//-----------------------------------------------
// shops
//-----------------------------------------------
<<<<<<< HEAD
import { TShopForDetails, TShopForList } from '@model/Shop'
=======
import { TShopForDetails, TShopForList } from '@/model/Shop'
>>>>>>> 2fe21c7 (axios / endpoint 修正)
import instance from '@utils/api'
import {
  insertShopQuery,
  updateShopQuery
} from '@utils/api/request-response-types/ShopService'
import { AxiosResponse } from 'axios'
<<<<<<< HEAD
import { baseEndpoint } from '@utils/api/apiEndpoint'
import { fetchModelsWithTotalCountResponse } from '@utils/api/request-response-types/ServiceCommonTypes'
=======
import { baseEndpoint } from '../apiEndpoint'
import { fetchModelsWithTotalCountResponse } from '../request-response-types/ServiceCommonTypes'
>>>>>>> 2fe21c7 (axios / endpoint 修正)

export const getShops = async (
  page: number,
  order: 'asc' | 'desc'
): Promise<AxiosResponse<fetchModelsWithTotalCountResponse<TShopForList>>> =>
  await instance.get<fetchModelsWithTotalCountResponse<TShopForList>>(
    `${baseEndpoint.shops}?page=${page}&order=${order}`
  )

export const getShop = async (
  id: number
): Promise<AxiosResponse<TShopForDetails>> =>
  await instance.get<TShopForDetails>(`${baseEndpoint.shops}/${id}`)

export const createShop = async (
  shopData: insertShopQuery
): Promise<AxiosResponse<TShopForDetails>> =>
  await instance.post(baseEndpoint.shops, { ...shopData })

export const patchShop = async (
  shopData: updateShopQuery
): Promise<AxiosResponse<TShopForDetails>> =>
  await instance.patch(`${baseEndpoint.shops}/${shopData.id}`, {
    ...shopData.params
  })

export const deleteShop = async (id: number): Promise<AxiosResponse<string>> =>
  await instance.delete<string>(`${baseEndpoint.shops}/${id}`)

const shops = {
  getShops,
  getShop,
  createShop,
  patchShop,
  deleteShop
}

export default shops
