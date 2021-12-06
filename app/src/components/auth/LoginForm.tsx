import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { FcGoogle } from 'react-icons/fc'
import CustomButton from '@components/common/atoms/CustomButton'
import { IAuthFormProps } from '@components/auth/_PropsType'
import InputFiled from '../common/atoms/InputFiled'

const LoginForm = ({
  value,
  setValue,
  onSubmit,
  googleHandler
}: IAuthFormProps) => {
  return (
    <div className='w-[55rem] mx-auto p-[3rem] rounded-[.5rem] bg-secondary-main'>
      <form onSubmit={onSubmit}>
        <InputFiled 
          name='email'
          type='text'
          autoComplete='off'
          placeholder='メールアドレスを入力してください'
          classes='border rounded-[.25rem] my-[2.5rem]'
          value={value.email}
          onChange={setValue}
          fullWidth
        />
        <InputFiled 
          name='password'
          type='password'
          placeholder='パスワードを入力してください' 
          autoComplete='off'
          classes='border rounded-[.25rem]' 
          value={value.password}
          onChange={setValue}
          fullWidth 
        />
        <CustomButton classes='min-w-full mt-[2.5rem] mb-[2.5rem]'>
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
