import React, { useCallback } from 'react'

import { MainTemplateProps } from './_PropsType'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/actions/authAction'

import CommonStyle from '../CommonStyle'
import Header from './Header'

const MainTemplate = ({ children }: MainTemplateProps) => {

  const classes = CommonStyle()
  const dispatch = useDispatch()

  const onLogout = useCallback(
    () => {
      dispatch(logout())
    }, [dispatch]
  )


  return (
    <React.Fragment>
      <Header onLogout={ onLogout } />
      <main className={ classes.mainBackground }>
        { children }
      </main>
    </React.Fragment>
  )

}

export default MainTemplate