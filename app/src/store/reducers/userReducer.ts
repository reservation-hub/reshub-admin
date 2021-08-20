//----------------------------------
// redux ユーザー状態管理 reducer
//----------------------------------

import {
  USERS_GET_SUCCESS,
  USERS_ADD_SUCCESS,
  USERS_EDIT_SUCCESS,
  USERS_DELETE_SUCCESS,
  USERS_REQUEST_FAILURE, UsersState, USERS_REQUEST_SUCCESS
} from '../types/usersType'
import { User } from '../../entities/User'
import { UserAction } from '../actions/userAction'


const initialState: UsersState = {
  loading: true,
  users: {} as User[],
  user: [] as User[],
  msg: ''
}

const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case USERS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload
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
        msg: action.payload
      }
    case USERS_REQUEST_FAILURE:
      return action.payload || state
    default:
      return state
  }
}

export default userReducer
