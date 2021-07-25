import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
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
  const dispatch = useDispatch()

  const [value, setValue] = useInput({
    email: '', password: ''
  })

  const onSubmit = useCallback(e => {
    e.preventDefault()
    dispatch(loginStart(value.email, value.password))
  }, [dispatch, value.email, value.password])

  const googleHandler = useCallback(
    response => {
      dispatch(googleLogin(response))
    }, [dispatch]
  )
  
  return(
    <main className={ loginCss.pageRoot }>
      <section className={ commonCss.boxCenter }>
        <LoginSelectHeader/>
        <LoginForm 
          value={ value } 
          setValue={ setValue } 
          onSubmit={ onSubmit } 
          googleHandler={ googleHandler }
          loginCss={ loginCss }
          commonCss={ commonCss }
        />
        <LoginSelectFooter/>
      </section>
    </main>
  ) 
}

export default Login