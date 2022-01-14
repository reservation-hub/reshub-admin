//-----------------------------------------------
// users
//-----------------------------------------------
import instance from '@utils/api'
import { AxiosResponse } from 'axios'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import {
  InsertUserQuery,
  UpdateUserPasswordQuery,
  UpdateUserQuery,
  UserListResponse,
  UserResponse
} from '@utils/api/request-response-types/User'

export const getUsers = async (
  page: number,
  order: 'asc' | 'desc'
): Promise<AxiosResponse<UserListResponse>> => {
  return await instance.get<UserListResponse>(
    `${baseEndpoint.users}?page=${page}&order=${order}`
  )
}

export const getUser = async (
  id: number
): Promise<AxiosResponse<UserResponse>> => {
  return await instance.get<UserResponse>(`${baseEndpoint.users}/${id}`)
}

export const createUser = async (
  userData: InsertUserQuery
): Promise<AxiosResponse<string>> => {
  return await instance.post<string>(baseEndpoint.users, { ...userData })
}

export const patchUser = async (
  userData: UpdateUserQuery
): Promise<AxiosResponse<string>> => {
  return await instance.patch<string>(`${baseEndpoint.users}/${userData.id}`, {
    ...userData.params
  })
}

export const deleteUser = async (
  id: number
): Promise<AxiosResponse<string>> => {
  return await instance.delete<string>(`${baseEndpoint.users}/${id}`)
}

export const changePassword = async (
  userData: UpdateUserPasswordQuery
): Promise<AxiosResponse<string>> => {
  return await instance.patch<string>(
    `${baseEndpoint.users}/${userData.id}/password`,
    { ...userData.params }
  )
}

const users = {
  getUsers,
  getUser,
  createUser,
  patchUser,
  changePassword,
  deleteUser
}

export default users
