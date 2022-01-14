import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { FcGoogle } from 'react-icons/fc'
import CustomButton from '@components/common/atoms/CustomButton'
import InputFiled from '@components/common/atoms/InputFiled'
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline
} from 'react-google-login'
import { VALIDATION_TEXT } from '@/constants/FormValid'
import ErrorMessage from '@components/common/atoms/ErrorMessage'
import { IFormProps } from '@components/form/_PropsType'
import { LoginSchema } from './loginSchema'

export interface IAuthFormProps<T> extends IFormProps<T> {
  googleHandler: (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => void
}

const LoginForm = <T extends LoginSchema>({
  submitHandler,
  googleHandler,
  error,
  control
}: IAuthFormProps<T>) => {
  return (
    <div className='w-[55rem] mx-auto p-[3rem] rounded-[.5rem] bg-secondary-main'>
      <form onSubmit={submitHandler}>
        <InputFiled
          name='email'
          type='text'
          autoComplete='off'
          placeholder='メールアドレスを入力してください'
          classes='my-[1.5rem]'
          control={control}
          error={Boolean(error?.email)}
          errorTxt={error?.email?.message}
          fullWidth
        />
        <InputFiled
          name='password'
          type='password'
          placeholder='パスワードを入力してください'
          autoComplete='off'
          classes='my-[1.5rem]'
          control={control}
          error={Boolean(error?.password)}
          errorTxt={error?.password?.message}
          fullWidth
        />
        {error?.invalid && (
          <ErrorMessage text={VALIDATION_TEXT.INVALID_ERROR} />
        )}
        <CustomButton classes='min-w-full mt-[.5rem] mb-[1.5rem]'>
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

export default React.memo(LoginForm)
