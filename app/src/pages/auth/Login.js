import React, {
  useCallback,
  useState
} from 'react'
import {
  loginStart,
  googleLogin
} from '../../store/actions/authAction'
import { Alert } from '@material-ui/lab'
import { useDispatch } from 'react-redux'
import { Slide } from '@material-ui/core'
import { AiOutlineClose } from 'react-icons/ai'

import history from '../../utils/history'
import useInput from '../../utils/useInput'
import LoginForm from '../../components/auth/LoginForm'
import LoginSelectHeader from '../../components/common/LoginSelectHeader'
import LoginSelectFooter from '../../components/common/LoginSelectFooter'
import LoginStyle from '../../components/auth/LoginStyle'
import CommonStyle from '../../components/CommonStyle'


const Login = ({ location }) => {

  const [errorState, setErrorState] = useState(true)
  const [value, setValue] = useInput({ email: '', password: '' })

  const dispatch = useDispatch()
  const loginCss = LoginStyle()
  const commonCss = CommonStyle()
  const classes = {
    loginCss,
    commonCss
  }

  const clearError = () => {
    setErrorState(false)
    history.replace()
  }

  const onSubmit = useCallback(
    e => {
      e.preventDefault()
      dispatch(loginStart(value.email, value.password))
    }, [dispatch, value.email, value.password]
  )

  const googleHandler = useCallback(
    response => {
      dispatch(googleLogin(response))
    }, [dispatch]
  )
  
  return(
    <main className={ classes.commonCss.loginSelectBackground }>
      { location.state && location.state.error &&
        <Slide in={ errorState }>
          <Alert
            severity='error'
            action={
              <span onClick={() => clearError()}>
                <AiOutlineClose />
              </span>
            }
          >
            <strong> { location.state.error } </strong>
          </Alert>
        </Slide>
      }
      <section className={ classes.commonCss.boxCenter }>
        <LoginSelectHeader />
        <LoginForm 
          value={ value }
          setValue={ setValue } 
          onSubmit={ onSubmit } 
          googleHandler={ googleHandler }
          classes={ classes }
        />
        <LoginSelectFooter />
      </section>
    </main>
  ) 
}

export default Login