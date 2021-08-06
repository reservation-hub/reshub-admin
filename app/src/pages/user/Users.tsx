import React, {
  useEffect,
  useState
} from 'react'
import {
  useDispatch,
  useSelector
} from 'react-redux'
import { Route } from 'react-router-dom'
import { RootState } from '../../store/store'
import { fetchUserList } from '../../store/actions/userAction'

import UserList from '../../components/user/userList/UserList'
import Profile from './Profile'
import CommonStyle from '../../components/CommonStyle'


const Users = () => {

  const dispatch = useDispatch()
  const classes = CommonStyle()
  const { users, loading } = useSelector((state: RootState) => state.user)
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const modalOpenHandler = (): void => {
    setModalOpen(true)
  }

  const modalCloseHandler = (): void => {
    setModalOpen(false)
  }

  useEffect(() => {
    dispatch(fetchUserList())
  }, [dispatch])

  if (loading) return <span>loading...</span>

  return (
    <main className={ classes.mainBackground }>
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