//----------------------------------
// redux reducer ユーザー印証
//----------------------------------
import { AuthState, AUTH_TYPE } from '@store/types/authTypes'
import { AuthAction } from '@store/actions/authAction'
import { loginResponse } from '@utils/api/request-response-types/Auth'

const initialState: AuthState = {
  loading: false,
  isAuthenticated: false,
  user: {} as loginResponse,
  err: {}
}

const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case AUTH_TYPE.REQUEST_START:
      return {
        ...state,
        loading: true
      }
    case AUTH_TYPE.REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload
      }
    case AUTH_TYPE.REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        err: action.payload
      }
    case AUTH_TYPE.LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: false
      }
    default:
      return state
  }
}

export default authReducer
