import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ children, ...rest }) => {

  const { isAuthenticated, user } = useSelector(state => state.auth)

  return (
    <>
      { isAuthenticated && 
        user.roles[0].name === 'admin' ? (
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