import { ADMIN_NAV_MENU, STAFF_NAV_MENU } from '@constants/Paths'
import React from 'react'
import { NavLink } from 'react-router-dom'

export interface INavMenuProps {
  role?: boolean
}

const NavMenu = ({role}: INavMenuProps) => {
  return (
    <div className='grid mt-[3rem]'>
      {role ? (
        ADMIN_NAV_MENU.map((value, index) => (
          <React.Fragment key={index}>
            <NavLink
              to={{
                pathname: value.path,
                state: { currentPage: 1 }
              }}
              className='p-[1rem]'
              activeClassName='bg-secondary-main text-primary'
            >
              <span className='text-[2.4rem]'>{value.value}</span>
            </NavLink>
            <hr className='w-full' />
          </React.Fragment>
        ))
      ): (
        STAFF_NAV_MENU.map((value, index) => (
          <React.Fragment key={index}>
            <NavLink
              to={{
                pathname: value.path,
                state: { currentPage: 1 }
              }}
              className='p-[1rem]'
              activeClassName='bg-secondary-main text-primary'
            >
              <span className='text-[2.4rem]'>{value.value}</span>
            </NavLink>
            <hr className='w-full' />
          </React.Fragment>
        ))
      )}
    </div>
  )
}

export default NavMenu
