import React, { useState } from 'react'
import ListItemText from '@material-ui/core/ListItemText'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
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
      <div>
        <List>
          {NAV_MENU.map((value, index) => (
            <NavLink
              key={index}
              to={{
                pathname: value.path,
                state: { currentPage: 1 }
              }}
              activeClassName='bg-secondary-main'
            >
              <ListItem button className='text-[2.4rem]'>
                <ListItemText primary={value.value} />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </div>
      <footer className='flex items-center'>
        <span>Copyright 2021Reshub</span>
        <span>
          <a href='https://github.com/reservation-hub'>
            <AiOutlineGithub className='w-[2rem] h-[2rem]' />
          </a>
        </span>
      </footer>
    </React.Fragment>
  )
}

export default NavBar
