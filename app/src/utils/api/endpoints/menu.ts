//-----------------------------------------------
// menu
//-----------------------------------------------
import {
  insertMenuItemQuery,
  updateMenuItemQuery
} from '@utils/api/request-response-types/ShopService'
import instance from '@utils/api'

export const createMenu = async (menuData: insertMenuItemQuery) =>
  await instance.post(`/shops/${menuData.shopId}/menu`, { ...menuData })

export const patchMenu = async (menuData: updateMenuItemQuery) =>
  await instance.patch(
    `/shops/${menuData.shopId}/menu/${menuData.menuItemId}`,
    { ...menuData }
  )

export const deleteMenu = async (shopId: number, menuId: number) =>
  await instance.delete(`/shops/${shopId}/menu/${menuId}`)

const menu = {
  createMenu,
  patchMenu,
  deleteMenu
}

export default menu
