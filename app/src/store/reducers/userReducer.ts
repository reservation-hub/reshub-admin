//----------------------------------
// redux ユーザー状態管理 reducer
//----------------------------------
import {
  USERS_ADD_SUCCESS,
  USERS_DELETE_SUCCESS,
  USERS_EDIT_SUCCESS,
  USERS_GET_SUCCESS,
  USERS_REQUEST_FAILURE,
  USERS_REQUEST_SUCCESS,
  UsersState,
  USERS_REQUEST_START
} from '@store/types/usersType'
import {
  fetchModelsWithTotalCountResponse,
  modelResponse
} from '@utils/api/request-response-types/ServiceCommonTypes'
import { User } from '@entities/User'
import { UserAction } from '@store/actions/userAction'

const initialState: UsersState = {
  loading: false,
  users: {} as fetchModelsWithTotalCountResponse<modelResponse<User>>,
  user: {} as User,
  msg: ''
}

const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case USERS_REQUEST_START:
      return {
        ...state,
        loading: true
      }
    case USERS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload
      }
    case USERS_GET_SUCCESS: {
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    }
    case USERS_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    case USERS_EDIT_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    case USERS_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    case USERS_REQUEST_FAILURE:
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
