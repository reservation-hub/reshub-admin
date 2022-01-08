import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '@store/store'
import { VALIDATION_TEXT } from '@constants/FormValid'
import { loginResponse } from '../api/request-response-types/Auth'
import { UserForAuth } from '../api/request-response-types/models/User'

/**
 *
 * @access staff and admin
 * @constructor
 */
const PublicRoute = ({ children, ...rest }: any) => {
  //-----------------------------------------------------------
  // 権限をチェックして権限がadminもしくはsalon staffの場合だけ
  // 行こうとしている経路へ移動させる
  // でないと、ログイン画面へリダイレクトする
  //-----------------------------------------------------------
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  )

  console.log(user)

  const isUser = (user: UserForAuth) =>
    user.role.name === 'admin' || user.role.name === 'shop staff'

  return (
    <>
      {isAuthenticated && isUser(user) ? (
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

export default PublicRoute
