//----------------------------------
// redux action types お店管理
//----------------------------------
import { User } from '@entities/User'
import {
  fetchModelsWithTotalCountResponse,
  modelResponse
} from '@utils/api/request-response-types/ServiceCommonTypes'

export const USERS_REQUEST_START = 'USERS_REQUEST_START' as const

export const USERS_REQUEST_SUCCESS = 'USERS_REQUEST_SUCCESS' as const

// お店情報の取得成功する場合
export const USERS_GET_SUCCESS = 'USERS_GET_SUCCESS' as const
// お店情報の登録成功の場合
export const USERS_ADD_SUCCESS = 'USERS_ADD_SUCCESS' as const
// お店情報の修正成功の場合
export const USERS_EDIT_SUCCESS = 'USERS_EDIT_SUCCESS' as const
// お店情報の削除成功の場合
export const USERS_DELETE_SUCCESS = 'USERS_DELETE_SUCCESS' as const

// お店情報の取得・登録・修正・削除失敗の場合
export const USERS_REQUEST_FAILURE = 'USERS_REQUEST_FAILURE' as const

export type UsersState = {
  loading: boolean
  users: fetchModelsWithTotalCountResponse<modelResponse<User>>
  user: User
  msg: string
}
