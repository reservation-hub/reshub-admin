//----------------------------------
// redux reducer ユーザー印証 
//----------------------------------

import { 
  AuthState,
  LOGOUT_REQUEST_SUCCESS,
  USER_REQUEST_FAILURE, 
  USER_REQUEST_SUCCESS 
} from "../types/authTypes"

const initialState = {
  loading: true,
  isAuthenticated: false,
  user: {},
  err: undefined
}

export const authReducer =  (state = initialState, action: any) => {
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
