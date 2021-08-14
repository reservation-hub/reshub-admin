import React, { FormEvent, useCallback, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import { RootState } from '../../store/store'
import { addUser, fetchUserList } from '../../store/actions/userAction'
import { useModal } from '../../utils/useModal'

import moment from 'moment'
import UserList from '../../components/user/userList/UserList'
import Profile from './Profile'
import useInput from '../../utils/useInput'
import ModalUserForm from '../../components/modal/ModalUserForm'
import ModalOverlay from '../../components/modal/ModalOverlay'
import MainTemplate from '../../components/common/layout/MainTemplate'

const Users = () => {

  const dispatch = useDispatch()
  const { users, loading } = useSelector((state: RootState) => state.user)
  const { open, openModal, closeModal } = useModal(false)
  const { input, ChangeHandler } = useInput({
    email: '',
    password: '',
    confirm: '',
    firstnameKanji: '',
    lastnameKanji: '',
    firstnameKana: '',
    lastnameKana: '',
    gender: '',
    birthdayY: '',
    birthdayM: '',
    birthdayD: '',
    role: ['']
  })

  const body = {
    email: input.email,
    password: input.password,
    confirm: input.confirm,
    firstNameKanji: input.firstnameKanji,
    lastNameKanji: input.lastnameKanji,
    firstNameKana: input.firstnameKana,
    lastNameKana: input.lastnameKana,
    gender: input.gender,
    birthday: moment(
      `${ input.birthdayY }/${ input.birthdayM }/${ input.birthdayD }`,
      'YYYY-MM-DD'
    ).format('YYYY-MM-DD'),
    roleIds: [Number(input.role)]
  }

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      // dispatch(addUser(body))
    }, [dispatch, addUser, body]
  )

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
        <ModalUserForm input={ input } setValue={ ChangeHandler } onSubmit={ onSubmit } />
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