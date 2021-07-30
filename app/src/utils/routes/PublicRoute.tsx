import React from 'react'

import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

// admin and salon staff
const PublicRoute = ({ children, ...rest }) => {

  //-----------------------------------------------------------
  // 権限をチェックして権限がadminもしくはsalon staffの場合だけ
  // 行こうとしている経路へ移動させる
  // でないと、ログイン画面へリダイレクトする
  //-----------------------------------------------------------
  
  const { isAuthenticated } = useSelector(state => state.auth)

  const isUser = user => user.roles.findIndex(role => role.role.name === 'admin' || 'salon staff') !== -1

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
        <Redirect to='/auth' />
      ) }
    </>
  )

}

export default PublicRoute
