import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ children, ...rest }) => {
  
  const { isAuthenticated, user } = useSelector(state => state.auth)

  const isUser = user => user.roles.findIndex(role => role.name === 'admin' || 'shop staff') !== -1

  return (
    <>
      { isAuthenticated &&
        isUser(user) ? (
          <Route
            { ...rest }
          >
            { children }
          </Route>
        ) : (
          <Redirect to='/' />
        ) }
    </>
  )

}

export default PublicRoute
