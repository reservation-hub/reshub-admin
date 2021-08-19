//----------------------------------
// redux reducer ユーザー印証 
//----------------------------------

import {
  AuthState,
  LOGOUT_REQUEST_SUCCESS,
  USER_REQUEST_FAILURE,
  USER_REQUEST_SUCCESS
} from '../types/authTypes'
import { AuthAction } from '../actions/authAction'
import { User } from '../../entities/User'


const initialState: AuthState = {
  loading: true,
  isAuthenticated: false,
  user: [] as User[],
  err: undefined
}

const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
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
        err: action.payload || {}
      }
    case LOGOUT_REQUEST_SUCCESS:
      localStorage.removeItem('persist:root')
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: {}
      }
    default:
      return state
  }
}

export default authReducer