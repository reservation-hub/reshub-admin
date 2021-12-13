import history from '@/utils/routes/history'
import { ADMIN_NAV_MENU, STAFF_NAV_MENU } from '@constants/Paths'
import React, { useState } from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'

export interface INavMenuProps {
  role?: boolean
}

const NavMenu = ({ role }: INavMenuProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const active = STAFF_NAV_MENU.find((v) => v.subItem)?.subItem?.some(
    (s) => location.pathname === s.path
  )
  const openHandler = () => {
    if (open) setOpen(false)
    else setOpen(true)
  }
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
                <div onClick={openHandler}>
                  <NavLink
                    to={value.path}
                    className={
                      open
                        ? 'p-[1rem] flex justify-between items-center open'
                        : 'p-[1rem] flex items-center justify-between'
                    }
                    activeClassName='bg-secondary-main text-primary'
                  >
                    <span className='text-[2.4rem]'>{value.value}</span>
                    {open || active ? (
                      <AiOutlineArrowDown className='w-[2.4rem] h-[2.4rem]' />
                    ) : (
                      <AiOutlineArrowUp className='w-[2.4rem] h-[2.4rem]' />
                    )}
                  </NavLink>
                </div>
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
              {value.subItem?.map((sub, index) => (
                <NavLink
                  key={index}
                  to={{
                    pathname: sub.path,
                    state: { currentPage: 1 }
                  }}
                  className={
                    open || active
                      ? 'p-[1rem] pl-[2rem] text-[1.6rem]'
                      : 'hidden'
                  }
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
