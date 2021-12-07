import React, { useCallback } from 'react'
import { IMainTemplateProps } from '../_PropsType'
import { useDispatch } from 'react-redux'
import { logout } from '@store/actions/authAction'
import Header from './Header'
import NavBar from '@/components/common/atoms/NavBar'
import '@styles/template.css'
import { Link } from 'react-router-dom'

const MainTemplate = ({ children }: IMainTemplateProps) => {
  const dispatch = useDispatch()

  const onLogout = useCallback(() => {
    dispatch(logout())
  }, [dispatch])

  return (
    <>
      <Link to='/salon_dashboard'>
        <Header onLogout={onLogout} />
      </Link>
      <aside className='bg-primary text-secondary-main'>
        <NavBar />
      </aside>
      <main className='w-[80%] absolute h-full right-[1.5rem]'>
        {children}
      </main>
    </>
  )
}

export default React.memo(MainTemplate)
