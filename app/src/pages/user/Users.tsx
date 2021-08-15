import React, { FormEvent, useCallback, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import { RootState } from '../../store/store'
import { fetchUserList } from '../../store/actions/userAction'
import { useModal } from '../../utils/useModal'

import UserList from '../../components/user/userList/UserList'
import Profile from './Profile'
import ModalUserForm from '../../components/modal/ModalUserForm'
import ModalOverlay from '../../components/modal/ModalOverlay'
import MainTemplate from '../../components/common/layout/MainTemplate'

const Users = () => {

  const dispatch = useDispatch()
  const { users, loading } = useSelector((state: RootState) => state.user)
  const { open, openModal, closeModal } = useModal(false)

  useEffect(() => {
    dispatch(fetchUserList())
  }, [dispatch])

  if (loading) return <span>loading...</span>

  return (
    <MainTemplate>
      <ModalOverlay
        modalOpen={ open }
        modalCloseHandler={ closeModal }
        modalTitle='ユーザー登録' >
        <ModalUserForm />
      </ModalOverlay>
      <Route exact path='/users'>
        <UserList
          users={ users.data }
          modalOpenHandler={ openModal }
        />
      </Route>
      <Route path='/users/:id' component={ Profile } />
    </MainTemplate>
  )
}

export default Users