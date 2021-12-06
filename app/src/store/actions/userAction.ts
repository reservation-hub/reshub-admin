//----------------------------------
// redux ユーザー状態管理 action
//----------------------------------
import {
  USERS_ADD_SUCCESS,
  USERS_DELETE_SUCCESS,
  USERS_EDIT_SUCCESS,
  USERS_GET_SUCCESS,
  USERS_REQUEST_FAILURE,
  USERS_REQUEST_START,
  USERS_REQUEST_SUCCESS
} from '@store/types/usersType'
import { RootState, typedAction } from '@store/store'
import {
  insertUserFromAdminQuery,
  updateUserFromAdminQuery
} from '@utils/api/request-response-types/UserService'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { User } from '@entities/User'
import apiEndpoint from '../../utils/api/apiEndpoint'
import history from '@utils/routes/history'
import {
  fetchModelsWithTotalCountResponse,
  modelResponse
} from '@utils/api/request-response-types/ServiceCommonTypes'

const userRequestStart = () => {
  return typedAction(USERS_REQUEST_START)
}

const userRequestSuccess = (
  data: fetchModelsWithTotalCountResponse<modelResponse<User>>
) => {
  return typedAction(USERS_REQUEST_SUCCESS, data)
}

const userGetSuccess = (data: User) => {
  return typedAction(USERS_GET_SUCCESS, data)
}

const userAddSuccess = (data: User) => {
  return typedAction(USERS_ADD_SUCCESS, data)
}

const userPatchSuccess = (data: User) => {
  return typedAction(USERS_EDIT_SUCCESS, data)
}

const userDeleteSuccess = (msg: string) => {
  return typedAction(USERS_DELETE_SUCCESS, msg)
}

const userRequestFailure = (err: string) => {
  return typedAction(USERS_REQUEST_FAILURE, err)
}

export const fetchUserList =
  (
    page: number,
    order: 'asc' | 'desc'
  ): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(userRequestStart())
    try {
      const res = await apiEndpoint.users.getUsers(page, order)
      dispatch(userRequestSuccess(res.data))
    } catch (e: any) {
      history.push('/error')
    }
  }

export const getOneUser =
  (id: number): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(userRequestStart())
    try {
      const res = await apiEndpoint.users.getUser(id)
      dispatch(userGetSuccess(res.data))
    } catch (e: any) {
      history.push('/error')
    }
  }

export const addUser =
  (
    userData: insertUserFromAdminQuery
  ): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    console.log(userData)

    dispatch(userRequestStart())
    try {
      const res = await apiEndpoint.users.createUser(userData)
      dispatch(userAddSuccess(res.data))
      history.push({ pathname: '/users', state: { currentPage: 1 } })
    } catch (e: any) {
      const error = e.response.data
      dispatch(userRequestFailure(error))
    }
  }

export const patchUser =
  (
    userData: updateUserFromAdminQuery
  ): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(userRequestStart())
    try {
      const res = await apiEndpoint.users.patchUser(userData)
      dispatch(userPatchSuccess(res.data))
      history.push(`/users/${res.data.id}`)
    } catch (e: any) {
      const error = e.response.data
      dispatch(userRequestFailure(error))
    }
  }

export const deleteUser =
  (id: number): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(userRequestStart())
    try {
      const res = await apiEndpoint.users.deleteUser(id)
      dispatch(userDeleteSuccess(res.data))
      history.push({ pathname: '/users', state: { currentPage: 1 } })
    } catch (e: any) {
      const error = e.response.data
      dispatch(userRequestFailure(error))
    }
  }

export type UserAction =
  | ReturnType<typeof userRequestStart>
  | ReturnType<typeof userRequestSuccess>
  | ReturnType<typeof userGetSuccess>
  | ReturnType<typeof userAddSuccess>
  | ReturnType<typeof userPatchSuccess>
  | ReturnType<typeof userDeleteSuccess>
  | ReturnType<typeof userRequestFailure>
