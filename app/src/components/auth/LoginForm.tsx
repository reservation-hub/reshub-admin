import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { FcGoogle } from 'react-icons/fc'
import CustomButton from '@components/common/atoms/CustomButton'
import InputFiled from '../common/atoms/InputFiled'
import { ClassesAndChildren } from '../common/_PropsType'
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline
} from 'react-google-login'
import { TValid } from '@/utils/hooks/useValidation'
import { VALIDATION_TEXT } from '@/constants/FormValid'

export type TAuthForm = {
  email: string
  password: string
}

export interface IAuthFormProps extends ClassesAndChildren {
  value: TAuthForm
  setValue: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  onSubmit: React.FormEventHandler<HTMLFormElement>
  googleHandler: (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => void
  error?: TValid
  test?: Record<string, any>
}

const LoginForm = ({
  value,
  setValue,
  onSubmit,
  googleHandler,
  error
}: IAuthFormProps) => {
  let disabled = false
  for (const v of Object.values(value)) {
    disabled = v.length === 0
  }
  return (
    <div className='w-[55rem] mx-auto p-[3rem] rounded-[.5rem] bg-secondary-main'>
      <form onSubmit={onSubmit}>
        <InputFiled
          name='email'
          type='text'
          autoComplete='off'
          placeholder='メールアドレスを入力してください'
          classes={
            error?.email
              ? 'border border-error-main rounded-[.25rem]'
              : 'border rounded-[.25rem]'
          }
          value={value.email}
          onChange={setValue}
          onBlur={setValue}
          error={error?.email}
          errorTxt={VALIDATION_TEXT.EMAIL}
          fullWidth
        />
        <InputFiled
          name='password'
          type='password'
          placeholder='パスワードを入力してください'
          autoComplete='off'
          classes={
            error?.password
              ? 'border border-error-main rounded-[.25rem]'
              : 'border rounded-[.25rem]'
          }
          value={value.password}
          onChange={setValue}
          error={error?.password}
          errorTxt={VALIDATION_TEXT.PASSWORD}
          fullWidth
        />
        <CustomButton
          classes='min-w-full mt-[.5rem] mb-[1.5rem]'
          disabled={disabled}
        >
          ログイン
        </CustomButton>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          onSuccess={googleHandler}
          onFailure={googleHandler}
          render={(renderProps) => (
            <CustomButton
              onClick={renderProps.onClick}
              classes='min-w-full flex items-center text-center'
            >
              <FcGoogle className='pt-[.25rem] pl-[.25rem] w-[2.5rem] h-[2.5rem]' />
              <span className='button-text w-full pr-[1.5rem]'>
                googleでログイン
              </span>
            </CustomButton>
          )}
        />
      </form>
    </div>
  )
}

export default LoginForm
