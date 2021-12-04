import React from 'react'
import { GoogleLogin } from 'react-google-login'
import TextField from '@material-ui/core/TextField'
import { FcGoogle } from 'react-icons/fc'
import CustomButton from '@components/common/atoms/CustomButton'
import { IAuthFormProps } from '@components/auth/_PropsType'

const LoginForm = ({
  value,
  setValue,
  onSubmit,
  googleHandler
}: IAuthFormProps) => {
  return (
    <div className='w-[55rem] mx-auto p-[3rem] rounded-[.5rem] bg-secondary-main'>
      <form onSubmit={onSubmit}>
        <TextField
          label='メールアドレス'
          name='email'
          autoComplete='off'
          placeholder='メールアドレスを入力してください'
          value={value.email}
          onChange={setValue}
          style={{ margin: '.5rem 0 2rem 0' }}
          className='inputBox'
          fullWidth
        />
        <TextField
          label='パスワード'
          name='password'
          type='password'
          autoComplete='off'
          placeholder='パスワードを入力してください'
          value={value.password}
          onChange={setValue}
          className='inputBox'
          fullWidth
        />
        <CustomButton classes='w-[100%] mt-[2.5rem] mb-[2.5rem]'>
          ログイン
        </CustomButton>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          onSuccess={googleHandler}
          onFailure={googleHandler}
          render={(renderProps) => (
            <CustomButton
              onClick={renderProps.onClick}
              classes='w-[100%] flex items-center hover:bg-table-headerFont text-center'
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
