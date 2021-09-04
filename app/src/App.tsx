import React, { useEffect } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout, silentLogin } from './store/actions/authAction'
import { CssBaseline } from '@material-ui/core'

import PrivateRoute from './utils/routes/PrivateRoute'
import PublicRoute from './utils/routes/PublicRoute'
import Cookies from 'js-cookie'
import history from './utils/history'

import Home from './pages/home/Home'
import Error from './pages/error/Error'
import Login from './pages/auth/Login'
import Users from './pages/user/Users'
import Salon from './pages/shop/Salon'
import SalonDashboard from './pages/dashboards/salon/SalonDashboard'
import setAuthToken from './utils/setAuthToken'

const App = () => {
  
  const dispatch = useDispatch()
  
  const sessionToken: string = Cookies.get('sessionToken') ?? ''
  const authToken: string = Cookies.get('authToken') ?? ''
  const refreshToken: string = Cookies.get('refreshToken') ?? ''
  setAuthToken(sessionToken)
  
  useEffect(() => {
    if (!authToken && !sessionToken && refreshToken) {
      dispatch(silentLogin())
    } else if (!authToken) {
      history.push('/auth', { error: 'error' })
    }
  }, [dispatch, sessionToken, authToken, refreshToken])
  
  return (
    <Router history={ history }>
      <CssBaseline />
      <Switch>
        {/* public */ }
        <PublicRoute exact path='/' component={ Home } />
        <PublicRoute path='/salon_dashboard' component={ SalonDashboard } />
        
        {/* only not logged in */ }
        <Route path='/auth' component={ Login } />
        
        {/* only admin */ }
        <PrivateRoute path='/salon' component={ Salon } />
        <PrivateRoute path='/users' component={ Users } />
        
        {/* has error */ }
        <Route component={ Error } />
      </Switch>
    </Router>
  )
}

export default App
