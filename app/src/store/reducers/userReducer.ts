//----------------------------------
// redux ユーザー状態管理 reducer
//----------------------------------

import {
  USERS_FETCH_SUCCESS,
  USERS_GET_SUCCESS,
  USERS_ADD_SUCCESS,
  USERS_EDIT_SUCCESS,
  USERS_DELETE_SUCCESS,
  USERS_REQUEST_FAILURE, UsersState
} from '../types/usersType'
import { User } from '../../entities/User'


const initialState: UsersState = {
  loading: true,
  users: {} as User[],
  user: [] as User[]
}

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USERS_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload
      }
    case USERS_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    case USERS_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        user: [action.payload]
      }
    case USERS_EDIT_SUCCESS:
      return {
        ...state,
        loading: false,
        user: [action.payload]
      }
    case USERS_DELETE_SUCCESS:
      return {
        ...state,
        user: state.user.filter(
          res => res.id !== action.payload
        )
      }
    case USERS_REQUEST_FAILURE:
      return action.payload || state
    default:
      return state
  }
}

export default userReducer
