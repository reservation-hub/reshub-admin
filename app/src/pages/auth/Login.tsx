import React, { FormEvent, useCallback } from 'react'
import { googleLogin, loginStart } from '@store/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import useInput from '@utils/hooks/useInput'
import LoginForm from '@components/auth/LoginForm'
import LoginSelectHeader from '@components/common/choose/LoginSelectHeader'
import LoginSelectFooter from '@components/common/choose/LoginSelectFooter'
import CenterBox from '@components/common/layout/CenterBox'
import { RootState } from '@/store/store'
import SubTemplate from '@/components/common/layout/SubTemplate'

interface LocationState {
  failed?: string
}

const Login = ({ location }: RouteComponentProps<any, any, LocationState>) => {
  const { input, ChangeHandler } = useInput({ email: '', password: '' })
  const { err } = useSelector((state: RootState) => state.auth)

  const hasError = {
    email: err?.error?.keys?.includes('email'),
    password: err?.error?.keys?.includes('password'),
    invalid: err?.error?.message === 'Invalid query params'
  }

  const dispatch = useDispatch()

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
    <SubTemplate>
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
    </SubTemplate>
  )
}

export default React.memo(Login)
