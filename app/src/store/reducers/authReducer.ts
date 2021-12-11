//----------------------------------
// redux reducer ユーザー印証
//----------------------------------
import {
  AuthState,
  LOGOUT_REQUEST_SUCCESS,
  USER_REQUEST_FAILURE,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_START
} from '@store/types/authTypes'
import { AuthAction } from '@store/actions/authAction'
import { User } from '@entities/User'

const initialState: AuthState = {
  loading: false,
  isAuthenticated: false,
  user: {} as User,
  err: {}
}

const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case USER_REQUEST_START:
      return {
        ...state,
        loading: true
      }
    case USER_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload
      }
    case USER_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        err: action.payload
      }
    case LOGOUT_REQUEST_SUCCESS:
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
