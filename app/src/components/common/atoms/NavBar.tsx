import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaRegUserCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { RootState } from '@store/store'
import { AiOutlineGithub } from 'react-icons/ai'
import { NAV_MENU } from '@constants/Paths'

const NavBar = () => {
  const { user } = useSelector((state: RootState) => state.auth)

  return (
    <React.Fragment>
      <div className='mt-[3rem] mb-[1rem] text-[2.4rem]'>
        <Link to={`/users/${user.id}`}>
          <div className='text-center'>
            <FaRegUserCircle className='w-[5rem] h-[5rem] mx-auto' />
            <p className='m-0'>{user.username || 'Admin'}</p>
          </div>
        </Link>
      </div>
      <div className='grid mt-[3rem]'>
        {NAV_MENU.map((value, index) => (
          <>
            <NavLink
              key={index}
              to={{
                pathname: value.path,
                state: { currentPage: 1 }
              }}
              className='p-[1rem]'
              activeClassName='bg-secondary-main text-primary'
            >
              <span className='text-[2.4rem]'> 
                {value.value}
              </span>
            </NavLink>
            <hr className='w-full' />
          </>
        ))}
      </div>
      <footer className='flex items-center absolute bottom-[6rem]'>
        <span>Copyright 2021Reshub</span>
        <span>
          <a href='https://github.com/reservation-hub'>
            <AiOutlineGithub className='w-[3rem] h-[3rem] ml-5' />
          </a>
        </span>
      </footer>
    </React.Fragment>
  )
}

export default NavBar
