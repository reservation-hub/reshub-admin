import React, { useCallback } from 'react'
import { IMainTemplateProps } from '../_PropsType'
import { useDispatch } from 'react-redux'
import { logout } from '@store/actions/authAction'
import CommonStyle, { StyledPaper } from '../../CommonStyle'
import Header from './Header'
import NavBar from '@/components/common/atoms/NavBar'

const MainTemplate = ({ children }: IMainTemplateProps) => {
  const classes = CommonStyle()
  const dispatch = useDispatch()

  const onLogout = useCallback(() => {
    dispatch(logout())
  }, [dispatch])

  return (
    <React.Fragment>
      <Header onLogout={onLogout} />
      <aside className={classes.sideBar}>
        <NavBar />
      </aside>
      <main className={classes.mainBackground}>
        <StyledPaper elevation={0}>{children}</StyledPaper>
      </main>
    </React.Fragment>
  )
}

export default React.memo(MainTemplate)
