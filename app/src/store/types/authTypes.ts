//----------------------------------
// redux action types ユーザー 
//----------------------------------


// ユーザーのリクエストをスタートする
export const USER_REQUEST_START = 'USER_REQUEST_START' as const
// ユーザーのリクエストが成功した場合
export const USER_REQUEST_SUCCESS = 'USER_REQUEST_SUCCESS' as const
// ユーザーのリクエストが失敗した場合
export const USER_REQUEST_FAILURE = 'USER_REQUEST_FAILURE' as const

export const LOGOUT_REQUEST_SUCCESS = 'LOGOUT_REQUEST_SUCCESS' as const

export interface AuthState {
  isAuthenticated: boolean
  loading: boolean
  user: {}
  err?: { err: string }
}