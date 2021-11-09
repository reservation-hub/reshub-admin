import React, { FormEvent, useCallback, useState } from 'react'
import { googleLogin, loginStart } from '@store/actions/authAction'
import { useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import history from '@utils/routes/history'
import useInput from '@utils/hooks/useInput'
import LoginForm from '@components/auth/LoginForm'
import LoginSelectHeader from '@components/common/loginSelect/LoginSelectHeader'
import LoginSelectFooter from '@components/common/loginSelect/LoginSelectFooter'
import LoginStyle from '@components/auth/LoginStyle'
import CommonStyle, { StyledAlert } from '@components/common/CommonStyle'
import Fade from '@material-ui/core/Fade'

interface LocationState {
  failed?: string
}

const Login = ({ location }: RouteComponentProps<any, any, LocationState>) => {
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
    }, 1300)
  }

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      dispatch(loginStart(input.email, input.password))
    },
    [dispatch, input.email, input.password]
  )

  const googleHandler = useCallback(
    (response) => {
      dispatch(googleLogin(response))
    },
    [dispatch]
  )

  return (
    <main className={classes.commonCss.loginSelectBackground}>
      {location.state && (
        <Fade in={errorState} timeout={1300}>
          <StyledAlert
            severity='error'
            action={
              <span onClick={() => clearError()}>
                <AiOutlineClose />
              </span>
            }
          >
            <strong>{location.state?.failed}</strong>
          </StyledAlert>
        </Fade>
      )}
      <section className={classes.commonCss.boxCenter}>
        <LoginSelectHeader />
        <LoginForm
          value={input}
          setValue={ChangeHandler}
          onSubmit={onSubmit}
          googleHandler={googleHandler}
          classes={classes}
        />
        <LoginSelectFooter />
      </section>
    </main>
  )
}

export default Login
