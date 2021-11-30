import React, { useCallback } from 'react'
import { IMainTemplateProps } from '../_PropsType'
import { useDispatch } from 'react-redux'
import { logout } from '@store/actions/authAction'
import CommonStyle, { StyledPaper } from '../CommonStyle'
import Header from './Header'
import NavBar from '@/components/common/atoms/NavBar'

const MainTemplate = ({ children }: IMainTemplateProps) => {
  const classes = CommonStyle()
  const dispatch = useDispatch()

  const onLogout = useCallback(() => {
    dispatch(logout())
  }, [dispatch])

  return (
    <main className='w-full h-screen'>
      <Header onLogout={onLogout} />
      <aside className='absolute h-full bg-primary text-secondary-main'>
        <NavBar />
      </aside>
      <section className='w-[82.5%] mt-[5.5rem] ml-[20rem]'>
        <StyledPaper>{children}</StyledPaper>
      </section>
    </main>
  )
}

export default React.memo(MainTemplate)
