//----------------------------------
// redux action ユーザー印証管理関数
//----------------------------------
import {
  LOGOUT_REQUEST_SUCCESS,
  USER_REQUEST_FAILURE,
  USER_REQUEST_START,
  USER_REQUEST_SUCCESS
} from '@store/types/authTypes'
import { RootState, typedAction } from '@store/store'
import { GoogleLoginResponse } from 'react-google-login'
import { User } from '@entity/User'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import apiEndpoint from '@utils/api/apiEndpoint'
import setAuthToken from '@utils/setAuthToken'
import history from '@utils/history'
import Cookies from 'js-cookie'

//ユーザーのリクエストをスタートするアクション
const loginRequestStart = () => {
  return typedAction(USER_REQUEST_START)
}

const fetchUser = (user: User) => {
  return typedAction(USER_REQUEST_SUCCESS, user)
}

//ユーザーのリクエストが失敗の時に実行するアクション
const loginRequestFailure = (err: string) => {
  return typedAction(USER_REQUEST_FAILURE, err)
}

const logoutSuccess = (msg: string) => {
  return typedAction(LOGOUT_REQUEST_SUCCESS, msg)
}

// refresh tokenをサーバーに投げてユーザー情報をもらってくるアクション
export const silentLogin =
  (): ThunkAction<void, RootState, null, Action> => async (dispatch) => {
    try {
      const user = await apiEndpoint.authenticated.silentRefresh()
      const token = user.data.token

      Cookies.set('sessionToken', token, { expires: 1 })
      setAuthToken(token)

      dispatch(fetchUser(user.data.user))
      history.push('/')
    } catch (e: any) {
      console.log(e.response)
      dispatch(loginRequestFailure(e.response.data))
    }
  }

// localログインを実行するアクション
export const loginStart =
  (
    email: string,
    password: string
  ): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(loginRequestStart())
    try {
      const user = await apiEndpoint.authenticated.localLogin({
        email,
        password
      })
      const token = user.data.token

      Cookies.set('sessionToken', token, { expires: 1 })
      setAuthToken(token)

      dispatch(fetchUser(user.data.user))
      history.push('/')
    } catch (e: any) {
      dispatch(loginRequestFailure(e.response.data))
    }
  }

// googleログインを実行するアクション
export const googleLogin =
  (
    googleResponse: GoogleLoginResponse
  ): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    const provider = 'google'

    try {
      const user = await apiEndpoint.authenticated.googleLogin(
        provider,
        googleResponse.tokenId
      )
      const token = user.data.token

      Cookies.set('sessionToken', token, { expires: 1 })
      setAuthToken(token)

      dispatch(fetchUser(user.data.user))
      history.push('/')
    } catch (e: any) {
      dispatch(loginRequestFailure(e.response.data))
    }
  }

// ログアウトを実行するアクション
export const logout =
  (): ThunkAction<void, RootState, null, Action> => async (dispatch) => {
    try {
      setAuthToken(Cookies.get('sessionToken'))
      const message = await apiEndpoint.authenticated.logout()
      Cookies.remove('sessionToken')
      Cookies.remove('refreshToken')

      dispatch(logoutSuccess(message.data))

      history.push('/auth')
    } catch (e: any) {
      console.log(e.response)
      dispatch(loginRequestFailure(e.response.data))
    }
  }

export type AuthAction =
  | ReturnType<typeof loginRequestStart>
  | ReturnType<typeof fetchUser>
  | ReturnType<typeof loginRequestFailure>
  | ReturnType<typeof logoutSuccess>
