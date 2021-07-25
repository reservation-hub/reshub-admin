import React, { useEffect } from 'react'
import { Router, Route,Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { silentLogin } from './store/actions/authAction'

import PrivateRoute from './utils/routes/PrivateRoute'
import PublicRoute from './utils/routes/PublicRoute'
import Home from './pages/home/Home'
import Error from './pages/error/Error'
import history from './utils/history'
import Login from './pages/auth/Login'
import Prefecture from './pages/prefecture/Prefecture'
import Cities from './pages/city/Cities'
import Cookies from 'js-cookie'
import Users from './pages/user/Users'
import Salon from './pages/shop/Salon'

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

        {/* only not logged in */}
        <Route path='/auth' component={ Login } /> 

        {/* only admin */}
        <PrivateRoute path='/pre' component={ Prefecture }/>
        <PrivateRoute path='/city' component={ Cities } />
        <PrivateRoute path='/salon' component={ Salon }/>
        <PrivateRoute path='/users' component={ Users } />

        {/* has error */}
        <Route component={ Error } />
      </Switch>
    </Router>
  )
}

export default React.memo(App)
