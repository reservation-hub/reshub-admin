//----------------------------------
// redux ユーザー状態管理 action
//----------------------------------

import { 
  USERS_REQUEST_START,
  USERS_FETCH_SUCCESS,
  USERS_GET_SUCCESS,
  USERS_ADD_SUCCESS,
  USERS_EDIT_SUCCESS,
  USERS_DELETE_SUCCESS,
  USERS_REQUEST_FAILURE
 } from '../types/usersType'
import { RootState } from '../store'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
 

import apiEndpoint from '../../utils/api/apiEndpoint'
import history from '../../utils/history'


const userRequestStart = () => {
  return {
    type: USERS_REQUEST_START
  }
}

const userRequestFailure = (err: string) => {
  return {
    type: USERS_REQUEST_FAILURE,
    payload: { err }
  }
}

export const fetchUserList = (): 
  ThunkAction<void, RootState, null, Action<any>> => async dispatch => {

  dispatch(userRequestStart())
  try {
    const res = await apiEndpoint.getUsers()
    dispatch({
      type: USERS_FETCH_SUCCESS,
      payload: res.data
    })
  } catch (e: any) {
    const error = e.response.data
    dispatch(userRequestFailure(error))
  }

}

export const getOneUser = (id: number): 
  ThunkAction<void, RootState, null, Action<any>> => async dispatch => {

  dispatch(userRequestStart())
  try {
    const res = await apiEndpoint.getOneUsers(id)
    dispatch({
      type: USERS_GET_SUCCESS,
      payload: res.data.data
    })
  } catch (e: any) {
    const error = e.response.data
    dispatch(userRequestFailure(error))
    history.push('/error')
  }

}

// export const addUser = (
//   firstName: string,
//   lastName: string,
//   email: string,
//   username: string,
//   password: string 
// ) => async dispatch => {

//   const userData = {
//     firstName,
//     lastName,
//     email,
//     username,
//     password 
//   } 

//   dispatch(userRequestStart())
//   try {
//     const res = await apiEndpoint.addUser(userData)
//     dispatch({
//       type: USERS_ADD_SUCCESS,
//       payload: res.data
//     })
//   } catch (e) {
//     const error = e.response.data
//     dispatch(userRequestFailure(error)) 
//   }

// }

// export const patchUser = (
//   id: number,
//   firstName: string,
//   lastName: string,
//   email: string,
//   username: string,
//   password: string 
// ) => async dispatch => {

//   const userData = {
//     firstName,
//     lastName,
//     email,
//     username,
//     password 
//   } 

//   dispatch(userRequestStart())
//   try {
//     const res = await apiEndpoint.patchUser(id, userData)
//     dispatch({
//       type: USERS_EDIT_SUCCESS,
//       payload: res.data
//     })
//   } catch (e) {
//     const error = e.response.data
//     dispatch(userRequestFailure(error)) 
//   }

// }

// export const putUser = (
//   id,
//   firstName,
//   lastName,
//   email,
//   username,
//   password 
// ) => async dispatch => {

//   const userData = {
//     firstName,
//     lastName,
//     email,
//     username,
//     password 
//   } 

//   dispatch(userRequestStart())
//   try {
//     const res = await apiEndpoint.putUser(id, userData)
//     dispatch({
//       type: USERS_EDIT_SUCCESS,
//       payload: res.data
//     })
//   } catch (e) {
//     const error = e.response.data
//     dispatch(userRequestFailure(error)) 
//   }

// }

// export const deleteUser = id => async dispatch => {

//   dispatch(userRequestStart())
//   try {
//     const res = await apiEndpoint.deleteUser(id)
//     dispatch({
//       type: USERS_DELETE_SUCCESS,
//       payload: res.data
//     })
//   } catch (e) {
//     const error = e.response.data
//     dispatch(userRequestFailure(error)) 
//   }
// }