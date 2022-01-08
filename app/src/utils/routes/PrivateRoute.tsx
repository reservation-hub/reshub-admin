import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '@store/store'
import { VALIDATION_TEXT } from '@constants/FormValid'
import { loginResponse } from '../api/request-response-types/Auth'

/**
 *
 * @access admin only
 * @constructor
 */
const PrivateRoute = ({ children, ...rest }: any) => {
  //-----------------------------------------------------------
  // 権限をチェックして権限がadminの場合だけ
  // 行こうとしている経路へ移動させる
  // でないと、ログイン画面へリダイレクトする
  //-----------------------------------------------------------
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  )

  const isAdmin = (user: loginResponse) => user.user?.role?.name === 'admin'

  return (
    <>
      {isAuthenticated && isAdmin(user) ? (
        <Route {...rest}>{children}</Route>
      ) : (
        <Redirect
          to={{
            pathname: '/auth_error',
            state: { failed: VALIDATION_TEXT.AUTHENTICATED_ERROR }
          }}
        />
      )}
    </>
  )
}

export default PrivateRoute
