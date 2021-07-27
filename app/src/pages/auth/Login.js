import React, {
  useCallback,
  useState
} from 'react'
import {
  loginStart,
  googleLogin
} from '../../store/actions/authAction'
import { useDispatch } from 'react-redux'
import { Alert } from '@material-ui/lab'
import { Collapse } from '@material-ui/core'

import useInput from '../../utils/useInput'
import LoginForm from '../../components/auth/LoginForm'
import LoginSelectHeader from '../../components/common/LoginSelectHeader'
import LoginSelectFooter from '../../components/common/LoginSelectFooter'
import LoginStyle from '../../components/auth/LoginStyle'
import CommonStyle from '../../components/CommonStyle'


const Login = ({ location }) => {

  const loginCss = LoginStyle()
  const commonCss = CommonStyle()
  const dispatch = useDispatch()

  const classes = {
    loginCss,
    commonCss
  }

  const [close, setClose] = useState(true)
  const closeErorrTap = () => {
    setClose(false)
  }

  const [value, setValue] = useInput({
    email: '', password: ''
  })

  const onSubmit = useCallback(
    e => {
      e.preventDefault()
      dispatch(loginStart(value.email, value.password))
    }, [dispatch,value.email, value.password]
  )

  const googleHandler = useCallback(
    response => {
      dispatch(googleLogin(response))
    }, [dispatch]
  )
  
  return(
    <main className={ classes.commonCss.loginSelectBackground }>

      { location.state && location.state.error &&
        <Collapse in={ close }>
          <Alert
            variant="filled"
            severity="error"
            action={
              <button onClick={() => setClose(false)}>
                x
              </button>
            }
          >
            <strong> { location.state.error } </strong>
          </Alert>
        </Collapse>
      }
      <section className={ commonCss.boxCenter }>
        <LoginSelectHeader />
        <LoginForm 
          value={ value } 
          setValue={ setValue } 
          onSubmit={ onSubmit } 
          googleHandler={ googleHandler }
          loginCss={ loginCss }
          commonCss={ commonCss }
        />
        <LoginSelectFooter />
      </section>
    </main>
  ) 
}

export default Login