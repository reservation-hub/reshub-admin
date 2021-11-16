import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import history from '@utils/routes/history'
import { COMMON_PATHS, PRIVATE_PATHS, PUBLIC_PATHS } from '@constants/Paths'
import PublicRoute from '@utils/routes/PublicRoute'
import PrivateRoute from '@utils/routes/PrivateRoute'

const RouterIndex = () => {
  return (
    <Router history={history}>
      <CssBaseline />
      <Switch>
        {PUBLIC_PATHS.map((value, index) => (
          <PublicRoute
            key={index}
            path={value.path}
            exact={value.exact}
            component={value.component}
          />
        ))}
        {PRIVATE_PATHS.map((value, index) => (
          <PrivateRoute
            key={index}
            path={value.path}
            component={value.component}
          />
        ))}
        {COMMON_PATHS.map((value, index) => (
          <Route
            key={index}
            path={value.path}
            exact={value.exact}
            component={value.component}
          />
        ))}
      </Switch>
    </Router>
  )
}

export default RouterIndex
