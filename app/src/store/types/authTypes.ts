//----------------------------------
// redux action types ユーザー 
//----------------------------------

import { User } from "../../utils/interface/interface"


// ユーザーのリクエストをスタートする
export const USER_REQUEST_START = 'USER_REQUEST_START'
// ユーザーのリクエストが成功した場合
export const USER_REQUEST_SUCCESS = 'USER_REQUEST_SUCCESS' 
// ユーザーのリクエストが失敗した場合
export const USER_REQUEST_FAILURE = 'USER_REQUEST_FAILURE'

export const LOGOUT_REQUEST_SUCCESS = 'LOGOUT_REQUEST_SUCCESS'

export interface AuthState {
  isAuthenticated: boolean
  loading: boolean
  user: User
  err?: {
    err: string
  }
}