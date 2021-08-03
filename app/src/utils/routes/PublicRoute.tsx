import React from 'react'

import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { User } from '../../interface/interface'

// admin and salon staff
const PublicRoute = ({ children, ...rest }: any) => {

  //-----------------------------------------------------------
  // 権限をチェックして権限がadminもしくはsalon staffの場合だけ
  // 行こうとしている経路へ移動させる
  // でないと、ログイン画面へリダイレクトする
  //-----------------------------------------------------------
  
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)

  const isUser = (user: User) => user.roles.findIndex(role => role.name === 'admin' || 'salon staff') !== -1

  return (
    <>
      { isAuthenticated &&
      isUser ? (
        <Route
          { ...rest }
        >
          { children }
        </Route>
      ) : (
        <Redirect to='/authReducer' />
      ) }
    </>
  )

}

export default PublicRoute
