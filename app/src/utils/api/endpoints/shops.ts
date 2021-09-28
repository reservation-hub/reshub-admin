//-----------------------------------------------
// shops
//-----------------------------------------------
import instance from '@utils/api'
import {
  insertShopQuery,
  updateShopQuery
} from '@utils/api/request-response-types/ShopService'

export const getShops = async (page: number) =>
  await instance.get(`/shops?page=${page}`)

export const getShop = async (id: number) => await instance.get(`/shops/${id}`)

export const createShop = async (shopData: insertShopQuery) =>
  await instance.post(`/shops`, { ...shopData })

export const patchShop = async (shopData: updateShopQuery) =>
  await instance.patch(`/shops/${shopData.id}`, { ...shopData.params })

export const deleteShop = async (id: number) =>
  await instance.delete(`/shops/${id}`)

const shops = {
  getShops,
  getShop,
  createShop,
  patchShop,
  deleteShop
}

export default shops
