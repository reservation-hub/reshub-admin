import React from 'react'

import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { User } from '../../interface/interface'


// only admin
const PrivateRoute = ({ children, ...rest }: any) => {

  //-----------------------------------------------------------
  // 権限をチェックして権限がadminの場合だけ
  // 行こうとしている経路へ移動させる
  // でないと、ログイン画面へリダイレクトする
  //-----------------------------------------------------------

  const { isAuthenticated } = useSelector((state: RootState) => state.auth)

  const isAdmin = (user: User) => user.roles.findIndex(role => role.name === 'admin') !== -1

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
            pathname: '/authReducer',
            state: { falied: 'アクセス権限がございません。' }
          }} />
      ) }
    </>
  )

}

export default PrivateRoute