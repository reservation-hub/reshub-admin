import React, {
  useCallback,
  useState
} from 'react'
import {
  loginStart,
  googleLogin
} from '../../store/actions/authAction'
import { 
  GoogleLoginResponse, 
  GoogleLoginResponseOffline 
} from 'react-google-login'
import { useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

import { Alert } from '@material-ui/lab'
import { Slide } from '@material-ui/core'
import { AiOutlineClose } from 'react-icons/ai'

import history from '../../utils/history'
import useInput from '../../utils/useInput'
import LoginForm from '../../components/auth/LoginForm'
import LoginSelectHeader from '../../components/common/LoginSelectHeader'
import LoginSelectFooter from '../../components/common/LoginSelectFooter'
import LoginStyle from '../../components/auth/LoginStyle'
import CommonStyle from '../../components/CommonStyle'

interface LocationParams {
  error: string
}

const Login = ({ location }: RouteComponentProps<LocationParams>) => {

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
    history.replace('/auth')
  }

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault()
      dispatch(loginStart(input.email, input.password))
    }, [dispatch, input.email, input.password]
  )

  const googleHandler = useCallback(
    (response) => {
      dispatch(googleLogin(response))
    }, [dispatch]
  )

  return(
    <main className={ classes.commonCss.loginSelectBackground }>
      {/* { location.state && location.state.error &&
        <Slide in={ errorState }>
          <Alert
            severity='error'
            action={
              <span onClick={() => clearError()}>
                <AiOutlineClose />
              </span>
            }
          >
            <strong> { location.state.error } </strong>
          </Alert>
        </Slide>
      } */}
      <section className={ classes.commonCss.boxCenter }>
        <LoginSelectHeader />
        <LoginForm 
          value={ input }
          setValue={ ChangeHandler } 
          onSubmit={ onSubmit } 
          googleHandler={ googleHandler }
          classes={ classes }
        />
        <LoginSelectFooter />
      </section>
    </main>
  ) 
}

export default Login