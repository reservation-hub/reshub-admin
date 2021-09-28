import instance from './index'
import {
  insertMenuItemQuery,
  insertShopQuery,
  insertStylistQuery,
  updateMenuItemQuery,
  updateShopQuery,
  updateStylistQuery
} from './request-response-types/ShopService'
import {
  insertReservationQuery,
  updateReservationQuery
} from './request-response-types/ReservationService'
import {
  insertUserFromAdminQuery,
  updateUserFromAdminQuery
} from './request-response-types/UserService'
import { localAuthenticationQuery } from './request-response-types/AuthService'

//-----------------------------------------------
// get method
//-----------------------------------------------

export const fetchAll = async () => await instance.get(`/`)
export const getShop = async (page: number) =>
  await instance.get(`/shops?page=${page}`)
export const getUsers = async (page: number) =>
  await instance.get(`/users?page=${page}`)
export const getDashboard = async () => await instance.get('/dashboard/salon')
export const getReservation = async () => await instance.get('/reservations')
export const getStylist = async () => await instance.get('/stylists')
export const getOneShop = async (id: number) =>
  await instance.get(`/shops/${id}`)
export const getOneUsers = async (id: number) =>
  await instance.get(`/users/${id}`)
export const getOneReservation = async (id: number) =>
  await instance.get(`/reservations/${id}`)
export const getOneStylist = async (id: number) =>
  await instance.get(`/stylists/${id}`)
export const getArea = async () => await instance.get('/areas')
export const getOneArea = async (id: number) =>
  await instance.get(`/areas/${id}`)
export const getPrefecture = async () => await instance.get('/prefectures')
export const getOnePref = async (id: number) =>
  await instance.get(`/prefectures/${id}`)
export const getCity = async () => await instance.get('/cities')

//-----------------------------------------------
// Crud method
//-----------------------------------------------

//-----------------------------------------------
// お店追加・修正・削除
//-----------------------------------------------
export const addShop = async (shopData: insertShopQuery) =>
  await instance.post(`/shops`, { ...shopData })
export const patchShop = async (shopData: updateShopQuery) =>
  await instance.patch(`/shops/${shopData.id}`, { ...shopData.params })
export const deleteShop = async (id: number) =>
  await instance.delete(`/shops/${id}`)

//-----------------------------------------------
// ユーザー追加・修正・削除
//-----------------------------------------------
export const addUser = async (userData: insertUserFromAdminQuery) =>
  await instance.post(`/users`, { ...userData })
export const patchUser = async (userData: updateUserFromAdminQuery) =>
  await instance.patch(`/users/${userData.id}`, { ...userData.params })
export const deleteUser = async (id: number) =>
  await instance.delete(`/users/${id}`)

//-----------------------------------------------
// menu追加・修正・削除
//-----------------------------------------------
export const addMenu = async (menuData: insertMenuItemQuery) =>
  await instance.post(`/shops/${menuData.shopId}/menu`, { ...menuData })
export const patchMenu = async (menuData: updateMenuItemQuery) =>
  await instance.patch(
    `/shops/${menuData.shopId}/menu/${menuData.menuItemId}`,
    { ...menuData }
  )
export const deleteMenu = async (shopId: number, menuId: number) =>
  await instance.delete(`/shops/${shopId}/menu/${menuId}`)

//-----------------------------------------------
// 予約追加・修正・削除
//-----------------------------------------------
export const createReservation = async (resData: insertReservationQuery) =>
  await instance.post('/reservations', { ...resData })
export const patchReservation = async (resData: updateReservationQuery) =>
  await instance.patch(`/reservations/${resData.id}`, { ...resData })
export const cancelReservation = async (id: number) =>
  await instance.delete(`/reservations/${id}`)

//-----------------------------------------------
// スタイリスト追加・修正・削除
//-----------------------------------------------
export const addStylist = async (stylistData: insertStylistQuery) =>
  await instance.post(`/shops/${stylistData.shopId}/stylists`, {
    ...stylistData
  })
export const patchStylist = async (stylistData: updateStylistQuery) =>
  await instance.patch(
    `/shops/${stylistData.shopId}/stylists/${stylistData.stylistId}`,
    { ...stylistData }
  )
export const deleteStylist = async (shopId: number, stylistId: number) =>
  await instance.delete(`/shops/${shopId}/stylists/${stylistId}`)

//-----------------------------------------------
// authenticate
//-----------------------------------------------
export const localLogin = async (formData: localAuthenticationQuery) =>
  await instance.post(`/auth/login`, {
    email: formData.email,
    password: formData.password
  })
export const googleLogin = async (provider: string, tokenId: string) =>
  await instance.post(`/auth/google`, { tokenId, provider })
export const silentRefresh = async () =>
  await instance.post(`/auth/silent_refresh`)
export const logout = async () => await instance.get(`/auth/logout`)

const apiEndpoint = {
  fetchAll,
  getShop,
  getUsers,
  getOneShop,
  getOneUsers,
  addShop,
  patchShop,
  deleteShop,
  addUser,
  patchUser,
  deleteUser,
  localLogin,
  googleLogin,
  silentRefresh,
  logout,
  addMenu,
  patchMenu,
  deleteMenu,
  getReservation,
  getDashboard,
  getOneReservation,
  getStylist,
  getOneStylist,
  addStylist,
  patchStylist,
  deleteStylist,
  createReservation,
  patchReservation,
  cancelReservation,
  getArea,
  getPrefecture,
  getCity,
  getOneArea,
  getOnePref,
  instance
}

export default apiEndpoint
