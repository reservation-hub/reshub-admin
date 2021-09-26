import React from 'react'
import { GoogleLogin } from 'react-google-login'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { FcGoogle } from 'react-icons/fc'
import CustomButton from '@components/common/atoms/CustomButton'
import { IAuthFormProps } from '@components/auth/_PropsType'

const LoginForm = ({
  value,
  setValue,
  onSubmit,
  googleHandler,
  classes
}: IAuthFormProps) => {
  return (
    <Container maxWidth='sm'>
      <Container className={classes.loginCss.formBox}>
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
          <Grid container>
            <Grid item xs={12}>
              <CustomButton
                className={`${classes.commonCss.buttonRoot} loginButton`}
              >
                ログイン
              </CustomButton>
            </Grid>
            <Grid item xs={12}>
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                onSuccess={googleHandler}
                onFailure={googleHandler}
                render={(renderProps) => (
                  <CustomButton
                    onClick={renderProps.onClick}
                    className='socialRoot'
                  >
                    <div className='google-icon'>
                      <FcGoogle />
                    </div>
                    <span className='button-text'>googleでログイン</span>
                  </CustomButton>
                )}
              />
            </Grid>
          </Grid>
        </form>
      </Container>
    </Container>
  )
}

export default LoginForm
