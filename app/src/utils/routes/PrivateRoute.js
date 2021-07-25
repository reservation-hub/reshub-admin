import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ children, ...rest }) => {

  const { isAuthenticated, user } = useSelector(state => state.auth)

  const isAdmin = user => user.roles.findIndex(role => role.role.name === 'admin') !== -1
  
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
          <Redirect to='/auth' />
      ) }
    </>
  )

}

export default PrivateRoute