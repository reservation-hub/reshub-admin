import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '@store/store'
import { User } from '@entity/User'

// admin and salon staff
const PublicRoute = ({ children, ...rest }: any) => {
  //-----------------------------------------------------------
  // 権限をチェックして権限がadminもしくはsalon staffの場合だけ
  // 行こうとしている経路へ移動させる
  // でないと、ログイン画面へリダイレクトする
  //-----------------------------------------------------------

  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  )

  const isUser = (user: User) =>
    user.role.name === 'admin' || user.role.name === 'shop_staff'

  console.log(user)

  return (
    <>
      {isAuthenticated && isUser(user) ? (
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

export default PublicRoute
