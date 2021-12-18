//-----------------------------------------------
// menu
//-----------------------------------------------
import instance from '@utils/api'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import { AxiosResponse } from 'axios'
import {
  InsertMenuQuery,
  UpdateMenuQuery
} from '@utils/api/request-response-types/Shop'

export const createMenu = async (
  menuData: InsertMenuQuery
): Promise<AxiosResponse<string>> =>
  await instance.post<string>(`${baseEndpoint.shops}/${menuData.shopId}/menu`, {
    ...menuData
  })

export const patchMenu = async (
  menuData: UpdateMenuQuery
): Promise<AxiosResponse<string>> =>
  await instance.patch<string>(
    `${baseEndpoint.shops}/${menuData.shopId}/menu/${menuData.menuId}`,
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
