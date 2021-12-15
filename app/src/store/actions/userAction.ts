//----------------------------------
// redux ユーザー状態管理 action
//----------------------------------
import { USER_TYPE } from '@store/types/usersType'
import { RootState, typedAction } from '@store/store'
import {
  insertUserFromAdminQuery,
  updateUserFromAdminQuery
} from '@utils/api/request-response-types/UserService'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import apiEndpoint from '@utils/api/apiEndpoint'
import history from '@utils/routes/history'
import {
  fetchModelsWithTotalCountResponse,
  modelResponse
} from '@utils/api/request-response-types/ServiceCommonTypes'
import { TUser, TUserForList } from '@model/User'

const userRequestStart = () => {
  return typedAction(USER_TYPE.REQUEST_START)
}

const userRequestSuccess = (
  data: fetchModelsWithTotalCountResponse<modelResponse<TUserForList>>
) => {
  return typedAction(USER_TYPE.REQUEST_SUCCESS, data)
}

const userGetSuccess = (data: TUser) => {
  return typedAction(USER_TYPE.GET_SUCCESS, data)
}

const userAddSuccess = (data: TUser) => {
  return typedAction(USER_TYPE.ADD_SUCCESS, data)
}

const userPatchSuccess = (data: TUser) => {
  return typedAction(USER_TYPE.EDIT_SUCCESS, data)
}

const userDeleteSuccess = (msg: string) => {
  return typedAction(USER_TYPE.DELETE_SUCCESS, msg)
}

const userRequestFailure = (err: string) => {
  return typedAction(USER_TYPE.REQUEST_FAILURE, err)
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
