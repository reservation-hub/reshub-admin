import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import { fetchUserList } from '../../store/actions/userAction'

import UserList from '../../components/user/UserList'
import Profile from './Profile'

const Users = () => {

  const dispatch = useDispatch()
  const { users, loading } = useSelector(state => state.user)
  const [modalOpen, setModalOpen] = useState(false)

  const modalOpenHandler = () => {
    setModalOpen(true)
  }

  const modalCloseHandler = () => {
    setModalOpen(false)
  }

  useEffect(() => {
    dispatch(fetchUserList())
  }, [dispatch])

  return (
    <main>
      { loading && <span>locading ...</span> }
      <Route exact path='/users'>
        <UserList
          users={ users.data }
          modalOpen={ modalOpen }
          modalOpenHandler={ modalOpenHandler }
          modalCloseHandler={ modalCloseHandler }
        />
      </Route>
      <Route path='/users/:id' component={ Profile } />
    </main>
  )
}

export default Users