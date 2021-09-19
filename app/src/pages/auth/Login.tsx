import React, { FormEvent, useCallback, useState } from 'react'

import { loginStart, googleLogin } from '../../store/actions/authAction'
import { useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

import { Alert } from '@material-ui/lab'
import { Slide } from '@material-ui/core'
import { AiOutlineClose } from 'react-icons/ai'

import history from '../../utils/history'
import useInput from '../../utils/useInput'
import LoginForm from '../../components/auth/LoginForm'
import LoginSelectHeader from '../../components/common/loginSelect/LoginSelectHeader'
import LoginSelectFooter from '../../components/common/loginSelect/LoginSelectFooter'

import LoginStyle from '../../components/auth/LoginStyle'
import CommonStyle from '../../components/CommonStyle'

interface LocationState {
  failed?: string
}

const Login = ({ location }: RouteComponentProps<LocationState>) => {
  const [errorState, setErrorState] = useState<boolean>(true)
  const { input, ChangeHandler } = useInput({ email: '', password: '' })

  const dispatch = useDispatch()
  const loginCss = LoginStyle()
  const commonCss = CommonStyle()
  const classes = {
    loginCss,
    commonCss
  }

  const clearError = (): void => {
    setErrorState(false)
    setTimeout(() => {
      history.replace('/auth')
    }, 100)
  }

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      dispatch(loginStart(input.email, input.password))
    }, [dispatch, input.email, input.password]
  )

  const googleHandler = useCallback(
    (response) => {
      dispatch(googleLogin(response))
    }, [dispatch]
  )

  return (
    <main className={ classes.commonCss.loginSelectBackground }>
      { location.state &&
      <Slide in={ errorState }>
        <Alert
          severity="error"
          action={
            <span onClick={ () => clearError() }>
                <AiOutlineClose/>
              </span>
          }
        >
          <strong>アクセス権限がございません。</strong>
        </Alert>
      </Slide>
      }
      <section className={ classes.commonCss.boxCenter }>
        <LoginSelectHeader/>
        <LoginForm
          value={ input }
          setValue={ ChangeHandler }
          onSubmit={ onSubmit }
          googleHandler={ googleHandler }
          classes={ classes }
        />
        <LoginSelectFooter/>
      </section>
    </main>
  )
}

export default Login