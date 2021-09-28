//-----------------------------------------------
// users
//-----------------------------------------------
import instance from '@utils/api'
import {
  insertUserFromAdminQuery,
  updateUserFromAdminQuery
} from '@utils/api/request-response-types/UserService'

export const getUsers = async (page: number) =>
  await instance.get(`/users?page=${page}`)

export const getUser = async (id: number) => await instance.get(`/users/${id}`)

export const createUser = async (userData: insertUserFromAdminQuery) =>
  await instance.post('/users', { ...userData })

export const patchUser = async (userData: updateUserFromAdminQuery) =>
  await instance.patch(`/users/${userData.id}`, { ...userData.params })

export const deleteUser = async (id: number) =>
  await instance.delete(`/users/${id}`)

const users = {
  getUsers,
  getUser,
  createUser,
  patchUser,
  deleteUser
}

export default users
