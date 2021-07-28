import React from 'react'

import { 
  Grid,
  Container,
  TextField
} from '@material-ui/core'
import { FcGoogle } from 'react-icons/fc'
import { GoogleLogin } from 'react-google-login'

const LoginForm = ({ 
  value, 
  setValue, 
  onSubmit, 
  googleHandler,
  classes
}) => {

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
                approvalPrompt='force'
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
