import React from 'react'

import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

// only admin
const PrivateRoute = ({ children, ...rest }) => {

  //-----------------------------------------------------------
  // 権限をチェックして権限がadminの場合だけ
  // 行こうとしている経路へ移動させる
  // でないと、ログイン画面へリダイレクトする
  //-----------------------------------------------------------

  const { isAuthenticated } = useSelector(state => state.auth)

  const isAdmin = user => user.roles.findIndex(role => role.role.name === 'admin') !== -1
  
  return (
    <>
      { isAuthenticated && 
        isAdmin ? (
          <Route 
            { ...rest }
          >
            { children }
          </Route>
        ) : (
          <Redirect to={{
            pathname: '/auth',
            state: { error: 'アクセス権限がございません。' }
          }} />
      ) }
    </>
  )

}

export default PrivateRoute