import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '@store/store'
import { User } from '@entity/User'

// only admin
const PrivateRoute = ({ children, ...rest }: any) => {
  //-----------------------------------------------------------
  // 権限をチェックして権限がadminの場合だけ
  // 行こうとしている経路へ移動させる
  // でないと、ログイン画面へリダイレクトする
  //-----------------------------------------------------------

  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  )

  const isAdmin = (user: User) =>
    user.roles.findIndex((role) => role.name === 'admin') !== -1

  return (
    <>
      {isAuthenticated && isAdmin(user) ? (
        <Route {...rest}>{children}</Route>
      ) : (
        <Redirect
          to={{
            pathname: '/auth',
            state: { failed: 'アクセス権限がございません。' }
          }}
        />
      )}
    </>
  )
}

export default PrivateRoute
