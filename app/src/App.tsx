import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { silentLogin } from '@store/actions/authAction'
import Cookies from 'js-cookie'
import RouterIndex from '@utils/routes/RouterIndex'
import setAuthToken from '@utils/api/setAuthToken'
import history from './utils/routes/history'
import { Redirect } from 'react-router-dom'

const App = () => {
  const dispatch = useDispatch()
  const sessionToken: string = Cookies.get('sessionToken') ?? ''
  const authToken: string = Cookies.get('authToken') ?? ''
  const refreshToken: string = Cookies.get('refreshToken') ?? ''
  setAuthToken(sessionToken)

  if (!authToken && !sessionToken && !refreshToken) {
    history.push('/auth')
  }

  useEffect(() => {
    if (!authToken && !sessionToken && refreshToken) {
      dispatch(silentLogin())
    }
  }, [dispatch, sessionToken, authToken, refreshToken])

  return <RouterIndex />
}

export default App
