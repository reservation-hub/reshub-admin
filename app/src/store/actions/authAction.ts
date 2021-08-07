//----------------------------------
// redux action ユーザー印証管理関数
//----------------------------------

import apiEndpoint from '../../utils/api/apiEndpoint'
import setAuthToken from '../../utils/setAuthToken'
import history from '../../utils/history'
import Cookies from 'js-cookie'
import { 
  USER_REQUEST_START, 
  USER_REQUEST_SUCCESS, 
  USER_REQUEST_FAILURE,
  LOGOUT_REQUEST_SUCCESS,
} from '../types/authTypes'
import { RootState } from '../store'
import { GoogleLoginResponse } from 'react-google-login'
import { User } from '../../entities/User'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'

//ユーザーのリクエストをスタートするアクション
const loginRequestStart = () => ({ type: USER_REQUEST_START })

const fetchUser = (user: User[]) => ({
  type: USER_REQUEST_SUCCESS,
  payload: user
})

//ユーザーのリクエストが失敗の時に実行するアクション
const loginRequestFailure = (err: string) => ({
  type: USER_REQUEST_FAILURE,
  payload: err
})

const logoutSuccess = (msg: string) => ({
  type: LOGOUT_REQUEST_SUCCESS,
  payload: msg
})

// refresh tokenをサーバーに投げてユーザー情報をもらってくるアクション
export const silentLogin = (): 
  ThunkAction<void, RootState, null, Action> => async dispatch => {

    try {
      const user = await apiEndpoint.silentRefresh()
      const token = user.data.token
      
      Cookies.set('refreshToken', token)
      setAuthToken(Cookies.get('refreshToken'))
      
      dispatch(fetchUser(user.data.user))
    } catch (e: any) {
      dispatch(loginRequestFailure(e.response.data))
    }

}

// localログインを実行するアクション
export const loginStart = (email: string, password: string): 
  ThunkAction<void, RootState, null, Action> => async dispatch => {

    dispatch(loginRequestStart())
    try {
      const user = await apiEndpoint.localLogin(email, password)
      const token = user.data.token
      
      Cookies.set('refreshToken', token)
      setAuthToken(token)

      dispatch(fetchUser(user.data.user))

      history.push('/')
    } catch (e: any) {
      dispatch(loginRequestFailure(e.response.data))
    }
}

// googelログインを実行するアクション
export const googleLogin = (googleResponse: GoogleLoginResponse): 
  ThunkAction<void, RootState, null, Action> => async dispatch => {

  const provider = 'google'

  try {
    const user = await apiEndpoint.googleLogin(provider, googleResponse.tokenId)
    const token = user.data.token

    Cookies.set('refreshToken', token)
    setAuthToken(token)

    dispatch(fetchUser(user.data.user))

    history.push('/')
  } catch (e: any) {
    dispatch(loginRequestFailure(e.response.data))
  }

}

//　ログアウトを実行するアクション
export const logout = (): 
  ThunkAction<void, RootState, null, Action> => async dispatch => {

    try {
      const message = await apiEndpoint.logout()    
      Cookies.remove('refreshToken')

      dispatch(logoutSuccess(message.data))

      history.push('/auth')
    } catch (e: any) {
      dispatch(loginRequestFailure(e.response.data))
    }

}

export type AuthAction =
  | ReturnType<typeof loginRequestStart>
  | ReturnType<typeof fetchUser>
  | ReturnType<typeof loginRequestFailure>
  | ReturnType<typeof logoutSuccess>