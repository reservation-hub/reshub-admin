//----------------------------------
// redux action types お店管理
//----------------------------------
import { User } from '@entities/User'
import {
  fetchModelsWithTotalCountResponse,
  modelResponse
} from '@utils/api/request-response-types/ServiceCommonTypes'

export const USER_TYPE = {
  REQUEST_START: 'USERS_REQUEST_START',
  REQUEST_SUCCESS: 'USERS_REQUEST_SUCCESS',
  GET_SUCCESS: 'USERS_GET_SUCCESS',
  ADD_SUCCESS: 'USERS_ADD_SUCCESS',
  EDIT_SUCCESS: 'USERS_EDIT_SUCCESS',
  DELETE_SUCCESS: 'USERS_DELETE_SUCCESS',
  REQUEST_FAILURE: 'USERS_REQUEST_FAILURE'
} as const

export type UsersState = {
  loading: boolean
  users: fetchModelsWithTotalCountResponse<modelResponse<User>>
  user: User
  msg: string
}
