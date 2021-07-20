import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserList } from '../../store/actions/userAction'
import UserList from '../../components/user/UserList'
import Profile from './Profile'

const Users = () => {

  const dispatch = useDispatch()
  const { users } = useSelector(state => state.user)
  
  useEffect(() => {
    dispatch(fetchUserList())
  }, [dispatch])

  return (
    <main>
      <Route exact path='/users' component={ () => <UserList
        users={ users.docs }
      /> } />
      <Route path='/users/:id' component={ Profile } />
    </main>
  )
}

export default Users