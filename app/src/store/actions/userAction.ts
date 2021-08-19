//----------------------------------
// redux ユーザー状態管理 action
//----------------------------------

import {
  USERS_REQUEST_START,
  USERS_REQUEST_FAILURE,
  USERS_REQUEST_SUCCESS, USERS_EDIT_SUCCESS, USERS_DELETE_SUCCESS
} from '../types/usersType'

import { RootState, typedAction } from '../store'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { insertUserFromAdminQuery, updateUserFromAdminQuery } from '../../utils/api/request-response-types/UserService'
import { User } from '../../entities/User'

import apiEndpoint from '../../utils/api/apiEndpoint'
import history from '../../utils/history'

const userRequestStart = () => {
  return typedAction(USERS_REQUEST_START)
}

const userRequestSuccess = (data: User[]) => {
  return typedAction(USERS_REQUEST_SUCCESS, data)
}

const userRequestFailure = (err: string) => {
  return typedAction(USERS_REQUEST_FAILURE, err)
}

export const fetchUserList = ():
  ThunkAction<void, RootState, null, Action> => async dispatch => {
  
  dispatch(userRequestStart())
  try {
    const res = await apiEndpoint.getUsers()
    dispatch(userRequestSuccess(res.data))
  } catch (e: any) {
    history.push('/error')
  }
  
}

export const getOneUser = (id: number):
  ThunkAction<void, RootState, null, Action> => async dispatch => {
  
  dispatch(userRequestStart())
  try {
    const res = await apiEndpoint.getOneUsers(id)
    dispatch(userRequestSuccess(res.data))
  } catch (e: any) {
    history.push('/error')
  }
  
}

export const addUser = (userData: insertUserFromAdminQuery):
  ThunkAction<void, RootState, null, Action> => async dispatch => {
  console.log(userData)
  
  dispatch(userRequestStart())
  try {
    const res = await apiEndpoint.addUser(userData)
    dispatch(userRequestSuccess(res.data))
    history.replace('/users')
  } catch (e) {
    const error = e.response.data
    dispatch(userRequestFailure(error))
  }
  
}

export const patchUser = (userData: updateUserFromAdminQuery):
  ThunkAction<void, RootState, null, Action> => async dispatch => {
  
  dispatch(userRequestStart())
  try {
    const res = await apiEndpoint.patchUser(userData)
    dispatch(typedAction(USERS_EDIT_SUCCESS, res.data))
  } catch (e) {
    const error = e.response.data
    dispatch(userRequestFailure(error))
  }
  
}

export const deleteUser = (id: number):
  ThunkAction<void, RootState, null, Action> => async dispatch => {
  
  dispatch(userRequestStart())
  try {
    const res = await apiEndpoint.deleteUser(id)
    dispatch(typedAction(USERS_DELETE_SUCCESS, res.data))
  } catch (e) {
    const error = e.response.data
    dispatch(userRequestFailure(error))
  }
}