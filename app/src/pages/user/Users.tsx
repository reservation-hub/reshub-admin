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
import CommonStyle from '../../components/CommonStyle'

const Users = () => {

  const dispatch = useDispatch()
  const classes = CommonStyle()
  const { users, loading } = useSelector((state: RootState) => state.user)
  const { open, openModal, closeModal } = useModal(false)
  const { input, ChangeHandler } = useInput({
    email: '',
    password: '',
    firstnameKanji: '',
    lastnameKanji: '',
    firstnameKana: '',
    lastnameKana: '',
    gender: '',
    birthdayY: '',
    birthdayM: '',
    birthdayD: '',
    role: ''
  })

  const body = {
    email: input.email,
    password: input.password,
    firstNameKanji: input.firstnameKanji,
    lastNameKanji: input.lastnameKanji,
    firstNameKana: input.firstnameKana,
    lastNameKana: input.lastnameKana,
    gender: input.gender,
    birthday: moment(
      `${ input.birthdayY }/${ input.birthdayM }/${ input.birthdayD }`
    ).format("YYYY-MM-DD"),
    roleIds: input.role
  }

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      dispatch(addUser(body))
    }, [dispatch, addUser, body]
  )

  useEffect(() => {
    dispatch(fetchUserList())
  }, [dispatch])

  if (loading) return <span>loading...</span>

  return (
    <main className={ classes.mainBackground }>
      <ModalOverlay modalOpen={ open } modalCloseHandler={ closeModal }>
        <ModalUserForm input={ input } setValue={ ChangeHandler } onSubmit={ onSubmit } />
      </ModalOverlay>
      <Route exact path='/users'>
        <UserList
          users={ users.data }
          modalOpenHandler={ openModal }
        />
      </Route>
      <Route path='/users/:id' component={ Profile } />
    </main>
  )
}

export default Users