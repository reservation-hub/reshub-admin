import React from 'react'
import { 
  Paper,
  Grid,
  Container,
  TextField,
  Typography,
  Button
} from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { GoogleLogin } from 'react-google-login'
import { logout } from '../../store/actions/authAction'
import LoginStyle from './LoginStyle'
import CommonStyle from '../CommonStyle'

const LoginForm = ({ 
  value, 
  setValue, 
  onSubmit, 
  googleHandler 
}) => {

  const login = LoginStyle()
  const common = CommonStyle()
  
  const dispatch = useDispatch()

  const onLogOut = () => {
    dispatch(logout())
  }

  return (
    <Paper className={ login.loginRoot }>
      <div className={ common.boxCenter }>

        {/* header area */}
        <Container 
          maxWidth='sm'
          align='right' 
          className={ 
            `${ login.headerFooter } ${ common.mb1 }`
          }
        >
          <Typography variant='h4'>
            Reshub-Admin
          </Typography>
        </Container>

        {/* main contents */}
        <Container maxWidth='sm'className={ login.formBox }>
          <Grid 
            container 
            alignItems='center'
            spacing={ 2 }
            className={ common.h255 }
          >
            <Grid item xs>
              <form onSubmit={ onSubmit }>
                <TextField 
                  label='email'
                  name='email'
                  autoComplete='off'
                  placeholder='Enter Email'
                  value={ value.email }
                  onChange={ setValue }
                  className={ login.input }
                  fullWidth
                />
                <TextField 
                  label='password'
                  name='password'
                  type='password'
                  autoComplete='off'
                  placeholder='Enter Password'
                  value={ value.password }
                  onChange={ setValue }
                  className={ 
                    login.public + 
                    ' ' + 
                    login.input 
                  }
                  fullWidth
                />
                <button className={ common.commonButton }>
                  Login
                </button>
              </form>
            </Grid>
            <Grid 
              container 
              item  
              align='center' 
              direction='column'
            >
              <GoogleLogin 
                clientId={ process.env.REACT_APP_GOOGLE_CLIENT_ID }
                onSuccess={ googleHandler }
                onFailure={ googleHandler }
                cookiePolicy={ 'single_host_origin' }
                approvalPrompt='force'
                prompt='consent'
              />
              <Button onClick={ onLogOut }>Log Out</Button>
            </Grid>
          </Grid>
        </Container>
        {/* footer area */}
        <Container 
          maxWidth='sm'
          className={ 
            `${ login.headerFooter } ${ common.mt1 }` 
          }
        >
          <Typography variant='h5'>
            Copyright 2021 Reshub
          </Typography>
        </Container>
      </div>
    </Paper> 
  )
}

export default React.memo(LoginForm)
