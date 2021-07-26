import React, { useCallback } from 'react'
import store from '../../store/store'
import { loginStart, googleLogin } from '../../store/actions/authAction'

import useInput from '../../utils/useInput'
import LoginForm from '../../components/auth/LoginForm'
import LoginSelectHeader from '../../components/common/LoginSelectHeader'
import LoginSelectFooter from '../../components/common/LoginSelectFooter'
import LoginStyle from '../../components/auth/LoginStyle'
import CommonStyle from '../../components/CommonStyle'

const Login = () => {

  const loginCss = LoginStyle()
  const commonCss = CommonStyle()

  const classes = {
    loginCss,
    commonCss
  }

  const [value, setValue] = useInput({
    email: '', password: ''
  })

  const onSubmit = useCallback(e => {
    e.preventDefault()
    store.dispatch(loginStart(value.email, value.password))
  }, [value.email, value.password])

  const googleHandler = useCallback(
    response => {
      store.dispatch(googleLogin(response))
    }, []
  )
  
  return(
    <main className={ classes.commonCss.loginSelectBackground }>
      <section className={ commonCss.boxCenter }>
        <LoginSelectHeader />
        <LoginForm 
          value={ value } 
          setValue={ setValue } 
          onSubmit={ onSubmit } 
          googleHandler={ googleHandler }
          loginCss={ loginCss }
          commonCss={ commonCss }
        />
        <LoginSelectFooter />
      </section>
    </main>
  ) 
}

export default Login