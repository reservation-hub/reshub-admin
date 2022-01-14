//----------------------------------
// redux ユーザー状態管理 reducer
//----------------------------------
import { UsersState, USER_TYPE } from '@store/types/usersTypes'
import { UserAction } from '@store/actions/userAction'
import {
  UserListResponse,
  UserResponse
} from '@utils/api/request-response-types/User'

const initialState: UsersState = {
  loading: false,
  users: {} as UserListResponse,
  user: {} as UserResponse,
  msg: ''
}

const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case USER_TYPE.REQUEST_START:
      return {
        ...state,
        loading: true
      }
    case USER_TYPE.REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload
      }
    case USER_TYPE.GET_SUCCESS: {
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    }
    case USER_TYPE.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    case USER_TYPE.EDIT_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    case USER_TYPE.DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    case USER_TYPE.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    case USER_TYPE.REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        err: action.payload || state
      }
    default:
      return state
  }
}

export default userReducer
