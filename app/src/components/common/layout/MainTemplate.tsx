import React, { useCallback } from 'react'

import { MainTemplateProps } from '../_PropsType'
import { useDispatch } from 'react-redux'
import { logout } from '../../../store/actions/authAction'

import CommonStyle, { StyledPaper } from '../../CommonStyle'
import Header from './Header'
import NavBar from '../atoms/NavBar'


const MainTemplate = ({ children }: MainTemplateProps ) => {

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
      <aside className={ classes.sideBar }>
        <NavBar />
      </aside>
      <main className={ classes.mainBackground }>
        <StyledPaper elevation={ 0 }>
          { children }
        </StyledPaper>
      </main>
    </React.Fragment>
  )

}

export default React.memo(MainTemplate)