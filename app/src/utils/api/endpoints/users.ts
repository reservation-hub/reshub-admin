//-----------------------------------------------
// users
//-----------------------------------------------
import { TUserForDetail, TUserForList } from '@/model/User'
import instance from '@utils/api'
import {
  insertUserFromAdminQuery,
  updateUserFromAdminQuery
} from '@utils/api/request-response-types/UserService'
import { AxiosResponse } from 'axios'
import { baseEndpoint } from '../apiEndpoint'
import { fetchModelsWithTotalCountResponse } from '../request-response-types/ServiceCommonTypes'

export const getUsers = async (
  page: number,
  order: 'asc' | 'desc'
): Promise<AxiosResponse<fetchModelsWithTotalCountResponse<TUserForList>>> =>
  await instance.get<fetchModelsWithTotalCountResponse<TUserForList>>(
    `${baseEndpoint.users}?page=${page}&order=${order}`
  )

export const getUser = async (
  id: number
): Promise<AxiosResponse<TUserForDetail>> =>
  await instance.get<TUserForDetail>(`/users/${id}`)

export const createUser = async (
  userData: insertUserFromAdminQuery
): Promise<AxiosResponse<TUserForDetail>> =>
  await instance.post<TUserForDetail>(baseEndpoint.users, { ...userData })

export const patchUser = async (
  userData: updateUserFromAdminQuery
): Promise<AxiosResponse<TUserForDetail>> =>
  await instance.patch<TUserForDetail>(`${baseEndpoint.users}/${userData.id}`, {
    ...userData.params
  })

export const deleteUser = async (id: number): Promise<AxiosResponse<string>> =>
  await instance.delete<string>(`${baseEndpoint.users}/${id}`)

const users = {
  getUsers,
  getUser,
  createUser,
  patchUser,
  deleteUser
}

export default users
