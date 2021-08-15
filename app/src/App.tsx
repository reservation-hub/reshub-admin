import React, { useEffect } from 'react'
import { Router, Route,Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { silentLogin } from './store/actions/authAction'

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

const  App = () => {
     
  const dispatch = useDispatch()

  useEffect(() => {
    if (Cookies.get('refreshToken')) dispatch(silentLogin())
  }, [dispatch])

  return (
    <Router history={ history }>
      <Switch>
        {/* public */}
        <PublicRoute exact path='/' component={ Home }/>
        <PublicRoute path='/salon_dashboard' component={ SalonDashboard } />

        {/* only not logged in */}
        <Route path='/auth' component={ Login } />

        {/* only admin */}
        <PrivateRoute path='/salon' component={ Salon }/>
        <PrivateRoute path='/users' component={ Users } />

        {/* has error */}
        <Route path='*' component={ Error } />
      </Switch>
    </Router>
  )
}

export default App
