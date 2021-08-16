import instance from './index'
import { updateShopQuery } from './request-response-types/ShopService'
import { insertUserFromAdminQuery } from './request-response-types/UserService'

//-----------------------------------------------
// get method
//-----------------------------------------------

// 全てのデータをGETする
export const fetchAll = async () => await instance.get(
  `/`
)

// お店のデータをGETする
export const getShop = async () => await instance.get(
  `/shops`
)

export const getUsers = async () => await instance.get(
  `/users`
)

export const getDashboard = async () => await instance.get(
  '/dashboard/salon'
)


//-----------------------------------------------
// get one method
//-----------------------------------------------

//　お店データを一つだけGETする
export const getOneShop = async (id: number) => await instance.get(
  `/shops/${ id }`
)

export const getOneUsers = async (id: number) => await instance.get(
  `/users/${ id }`
)

//-----------------------------------------------
// Crud method
//-----------------------------------------------

// add Shop data
export const addShop = async (shopData: object) => await instance.post(
  `/shops`, { ...shopData }
)

// patch Shop data
export const patchShop = async (shopData: updateShopQuery) => await instance.patch(
  `/shops/${ shopData.id }`, { ...shopData }
)

// delete Shop data
export const deleteShop = async (id: number) => await instance.delete(
  `/shops/${ id }`
)

// ユーザー追加
export const addUser = async (userData: insertUserFromAdminQuery) => await instance.post(
  `/users`, { ...userData }
)

// ユーザー修正
export const patchUser = async (id: number, userData: object) => await instance.patch(
  `/users/${ id }`, { ...userData }
)

// ユーザー削除
export const deleteUser = async (id: number) => await instance.delete(
  `/users/${ id }`
)

//-----------------------------------------------
// authenticate
//-----------------------------------------------

export const localLogin = async (
  email: string, password: string) => await instance.post(
    `/auth/login`, { email, password }
)

export const googleLogin = async (
  provider: string, tokenId: string) => await instance.post(
    `/auth/google`, { tokenId, provider }
)

export const silentRefresh = async () => await instance.post(
  `/auth/silent_refresh`
)

export const logout = async () => await instance.get(
  `/auth/logout`
)

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
  instance
}

export default apiEndpoint