//----------------------------------
// redux action types ユーザー
//----------------------------------
import { loginResponse } from '@/utils/api/request-response-types/Auth'

export const AUTH_TYPE = {
  REQUEST_START: 'USER_REQUEST_START',
  REQUEST_SUCCESS: 'USER_REQUEST_SUCCESS',
  REQUEST_FAILURE: 'USER_REQUEST_FAILURE',
  LOGOUT_SUCCESS: 'LOGOUT_REQUEST_SUCCESS'
} as const

export type AuthState = {
  isAuthenticated: boolean
  loading: boolean
  user: loginResponse
  err?: Record<string, any>
}
