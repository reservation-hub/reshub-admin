import React from 'react'
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
      <div className='nav-wrapper text-center'>
        <Link to={`/users/${user.id}`}>
          <div className='user-profile-link'>
            <FaRegUserCircle />
            <p className='user-name'>{user.username || 'Admin'}</p>
          </div>
        </Link>
      </div>
      <div>
        <List>
          {NAV_MENU.map((value, index) => (
            <NavLink key={index} to={value.path} activeClassName='active'>
              <ListItem button className='nav-items'>
                <ListItemText primary={value.value} />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </div>
      <footer className='display-flex align-center'>
        <span>Copyright 2021Reshub</span>
        <span>
          <a href='https://github.com/reservation-hub'>
            <AiOutlineGithub />
          </a>
        </span>
      </footer>
    </React.Fragment>
  )
}

export default NavBar
