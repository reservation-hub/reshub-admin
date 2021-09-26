import React from 'react'

import { List, ListItem, ListItemText } from '@material-ui/core'
import { NavLink, Link } from 'react-router-dom'
import { NavMenu } from '../_Constants'
import { FaRegUserCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { RootState } from '@store/store'
import { AiOutlineGithub } from 'react-icons/all'

const NavBar = () => {

  const { user } = useSelector((state: RootState) => state.auth)

  return (
    <React.Fragment>
      <div className="nav-wrapper text-center">
        <Link to={ `/users/${ user['id'] }` }>
          <div className="user-profile-link">
            <FaRegUserCircle/>
            <p className="user-name">
              { user['username'] || 'Admin' }
            </p>
          </div>
        </Link>
      </div>
      <div>
        <List>
          { NavMenu.map((value: string, index: number) => (
            <NavLink
              key={ index }
              to={
                `${ index === 0
                  ? '/salon_dashboard'
                  : index === 1
                    ? '/users' : '/salon'
                }`
              }
              activeClassName="active"
            >
              <ListItem button className="nav-items">
                <ListItemText primary={ value }/>
              </ListItem>
            </NavLink>
          )) }
        </List>
      </div>
      <footer className="display-flex align-center">
        <span>
          Copyright 2021Reshub
        </span>
        <span>
          <a href="https://github.com/reservation-hub">
            <AiOutlineGithub/>
          </a>
        </span>
      </footer>
    </React.Fragment>
  )
}

export default NavBar