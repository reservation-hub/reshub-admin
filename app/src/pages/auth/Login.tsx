import React, { useCallback } from 'react'
import { googleLogin, loginStart } from '@store/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import LoginForm from '@components/form/auth/LoginForm'
import CenterBox from '@components/common/layout/CenterBox'
import { RootState } from '@store/store'
import SubTemplate from '@components/common/layout/SubTemplate'
import Cookies from 'js-cookie'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, LoginSchema } from '@components/form/auth/loginSchema'
import LoginHeader from '@components/common/layout/LoginHeader'
import LoginFooter from '@components/common/layout/LoginFooter'

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' }
  })

  const { err } = useSelector((state: RootState) => state.auth)

  const hasError = {
    email: errors.email,
    password: errors.password,
    invalid: err?.error?.message === 'Invalid query params'
  }

  const dispatch = useDispatch()

  const onSubmit: SubmitHandler<LoginSchema> = useCallback(
    (value) => {
      dispatch(loginStart(value.email, value.password))
    },
    [dispatch]
  )

  const googleHandler = useCallback(
    (response) => {
      dispatch(googleLogin(response))
    },
    [dispatch]
  )

  if (Cookies.get('authToken')) return <Redirect to='/dashboard' />

  return (
    <SubTemplate>
      <CenterBox>
        <LoginHeader />
        <LoginForm
          submitHandler={handleSubmit(onSubmit)}
          googleHandler={googleHandler}
          error={hasError}
          control={control}
        />
        <LoginFooter />
      </CenterBox>
    </SubTemplate>
  )
}

export default React.memo(Login)
