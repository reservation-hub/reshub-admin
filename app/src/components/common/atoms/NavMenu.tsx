import history from '@/utils/routes/history'
import { ADMIN_NAV_MENU, STAFF_NAV_MENU } from '@constants/Paths'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export interface INavMenuProps {
  role?: boolean
}

const NavMenu = ({ role }: INavMenuProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const active = STAFF_NAV_MENU.find((v) => v.subItem)?.path
  return (
    <div className='grid mt-[3rem]'>
      {role
        ? ADMIN_NAV_MENU.map((value, index) => (
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
        : STAFF_NAV_MENU.map((value, index) => (
            <React.Fragment key={index}>
              {value.subItem ? (
                <>
                  <div
                    className={open ? 'p-[1rem] open' : 'p-[1rem]'}
                    onClick={() => setOpen(!open)}
                  >
                    <span className='text-[2.4rem]'>{value.value}</span>
                  </div>
                </>
              ) : (
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
              )}

              {open &&
                value.subItem?.map((sub, index) => (
                  <NavLink
                    key={index}
                    to={{
                      pathname: sub.path,
                      state: { currentPage: 1 }
                    }}
                    className='p-[1rem] text-[1.6rem]'
                    activeClassName='bg-secondary-main text-primary'
                  >
                    {sub.value}
                  </NavLink>
                ))}
              <hr className='w-full' />
            </React.Fragment>
          ))}
    </div>
  )
}

export default NavMenu
