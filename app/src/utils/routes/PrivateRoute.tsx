import React from 'react'

import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { User } from '../../entities/User'
import Loading from '../../components/common/atoms/loading'
import Cookies from 'js-cookie'

// only admin
const PrivateRoute = ({ children, ...rest }: any) => {
  
  //-----------------------------------------------------------
  // 権限をチェックして権限がadminの場合だけ
  // 行こうとしている経路へ移動させる
  // でないと、ログイン画面へリダイレクトする
  //-----------------------------------------------------------
  
  const { isAuthenticated, user, loading } = useSelector(
    (state: RootState) => state.auth
  )
  
  const isAdmin =
    (user: User) =>
      user.roles.findIndex(role => role.name === 'admin') !== -1
  
  if (!Cookies.get('refreshToken')) {
    return <Redirect to={ {
      pathname: '/auth',
      state: { failed: 'アクセス権限がございません。' }
    } }
    />
  } else if (loading) return <Loading />
  
  return (
    <>
      { isAuthenticated &&
      isAdmin(user) ? (
        <Route
          { ...rest }
        >
          { children }
        </Route>
      ) : (
        <Redirect to={ {
          pathname: '/auth',
          state: { failed: 'アクセス権限がございません。' }
        } } />
      ) }
    </>
  )
  
}

export default PrivateRoute