import React, { FormEvent, useCallback, useState } from 'react'
import { googleLogin, loginStart } from '@store/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import history from '@utils/routes/history'
import useInput from '@utils/hooks/useInput'
import LoginForm from '@components/auth/LoginForm'
import LoginSelectHeader from '@components/common/choose/LoginSelectHeader'
import LoginSelectFooter from '@components/common/choose/LoginSelectFooter'
import { StyledAlert } from '@components/common/CommonStyle'
import Fade from '@material-ui/core/Fade'
import CenterBox from '@components/common/layout/CenterBox'
import { RootState } from '@/store/store'

interface LocationState {
  failed?: string
}

const Login = ({ location }: RouteComponentProps<any, any, LocationState>) => {
  const [errorState, setErrorState] = useState<boolean>(true)
  const { input, ChangeHandler } = useInput({ email: '', password: '' })
  const { err } = useSelector((state: RootState) => state.auth)

  const hasError = {
    email: err?.error?.keys?.includes('email'),
    password: err?.error?.keys?.includes('password'),
    invalid: err?.error?.message === 'Invalid query params'
  }

  const dispatch = useDispatch()

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
    [dispatch, input]
  )

  const googleHandler = useCallback(
    (response) => {
      dispatch(googleLogin(response))
    },
    [dispatch]
  )

  return (
    <main className='w-full bg-primary h-full m-0'>
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
      <CenterBox>
        <LoginSelectHeader />
        <LoginForm
          value={input}
          setValue={ChangeHandler}
          onSubmit={onSubmit}
          googleHandler={googleHandler}
          error={hasError}
        />
        <LoginSelectFooter />
      </CenterBox>
    </main>
  )
}

export default React.memo(Login)
