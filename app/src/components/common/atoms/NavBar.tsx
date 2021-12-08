import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegUserCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { RootState } from '@store/store'
import { AiOutlineGithub } from 'react-icons/ai'
import NavMenu from './NavMenu'

const NavBar = () => {
  const { user } = useSelector((state: RootState) => state.auth)
  const roleCheck = user.role.name === 'admin'

  return (
    <>
      <div className='mt-[3rem] mb-[1rem] text-[2.4rem]'>
        <Link to={roleCheck ? `/users/${user.id}` : '/settings'}>
          <div className='text-center'>
            <FaRegUserCircle className='w-[5rem] h-[5rem] mx-auto' />
            <p className='m-0'>{user.username || 'Admin'}</p>
          </div>
        </Link>
      </div>
      <NavMenu role={roleCheck} />
      <footer className='flex items-center absolute bottom-[6rem] p-2'>
        <span>Copyright 2021Reshub</span>
        <span>
          <a href='https://github.com/reservation-hub'>
            <AiOutlineGithub className='w-[3rem] h-[3rem] ml-5' />
          </a>
        </span>
      </footer>
    </>
  )
}

export default NavBar
