//-----------------------------------------------
// menu
//-----------------------------------------------
import {
  insertMenuItemQuery,
  updateMenuItemQuery
} from '@utils/api/request-response-types/ShopService'
import instance from '@utils/api'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import { AxiosResponse } from 'axios'
import { TMenuForDetail } from '@/model/Menu'

export const createMenu = async (
  menuData: insertMenuItemQuery
): Promise<AxiosResponse<TMenuForDetail>> =>
  await instance.post<TMenuForDetail>(
    `${baseEndpoint.shops}/${menuData.shopId}/menu`,
    { ...menuData }
  )

export const patchMenu = async (
  menuData: updateMenuItemQuery
): Promise<AxiosResponse<TMenuForDetail>> =>
  await instance.patch<TMenuForDetail>(
    `${baseEndpoint.shops}/${menuData.shopId}/menu/${menuData.menuItemId}`,
    { ...menuData }
  )

export const deleteMenu = async (
  shopId: number,
  menuId: number
): Promise<AxiosResponse<string>> =>
  await instance.delete<string>(
    `${baseEndpoint.shops}/${shopId}/menu/${menuId}`
  )

const menu = {
  createMenu,
  patchMenu,
  deleteMenu
}

export default menu
