import React, { ChangeEventHandler, FormEventHandler } from 'react'

import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'
import { Grid, Container, TextField } from '@material-ui/core'
import { FcGoogle } from 'react-icons/fc'


interface LoginProps {
  value: { email: string, password: string }
  setValue: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  onSubmit: FormEventHandler<HTMLFormElement>,
  googleHandler: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void,
  classes?: any
}

const LoginForm = ({ 
  value,
  setValue, 
  onSubmit, 
  googleHandler,
  classes
}: LoginProps) => {

  return (
    <Container maxWidth='sm'>
      <Container className={ classes.loginCss.formBox }>
        <form onSubmit={ onSubmit }>
          <TextField 
            label='メールアドレス'
            name='email'
            autoComplete='off'
            placeholder='メールアドレスを入力してください'
            value={ value.email }
            onChange={ setValue }
            style={{ margin: '1.115rem 0 1rem 0' }}
            className={ classes.loginCss.input }
            fullWidth
          />
          <TextField 
            label='パスワード'
            name='password'
            type='password'
            autoComplete='off'
            placeholder='パスワードを入力してください'
            value={ value.password }
            onChange={ setValue }
            className={ classes.loginCss.input }
            fullWidth
          />
          <Grid container>
            <Grid item xs={ 12 }>
              <button
                className={ `${ classes.commonCss.buttonRoot } ${　classes.loginCss.loginButton　}` }
              >
                ログイン
              </button>
            </Grid>
            <Grid item xs={ 12 }>
              <GoogleLogin 
                clientId={ process.env.REACT_APP_GOOGLE_CLIENT_ID }
                onSuccess={ googleHandler }
                onFailure={ googleHandler }
                render={renderProps => (
                  <button 
                    onClick={ renderProps.onClick } 
                    className={ classes.loginCss.socialRoot }
                  >
                    <div className='google-icon'>
                      <FcGoogle />
                    </div>
                    <span className='button-text'>
                      googleでログイン
                    </span>
                  </button>
                  )
                }
              />
            </Grid>
          </Grid>
        </form>
      </Container>
    </Container>
  )
}

export default LoginForm
