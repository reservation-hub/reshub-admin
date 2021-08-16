import React, { FormEvent, useCallback, useEffect } from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import { RootState } from '../../store/store'
import { addUser, fetchUserList } from '../../store/actions/userAction'
import { useModal } from '../../utils/useModal'
import useInput from '../../utils/useInput'
import UserList from '../../components/user/userList/UserList'
import Profile from './Profile'
import ModalUserForm from '../../components/modal/ModalUserForm'
import ModalOverlay from '../../components/modal/ModalOverlay'
import MainTemplate from '../../components/common/layout/MainTemplate'
import * as yup from 'yup'
import { IUserFormInput } from '../../components/modal/_PropsType'
import { insertUserFromAdminQuery } from '../../utils/api/request-response-types/UserService'

export const schema = yup.object({
  email: yup.string().email('正しいメールアドレスを入力してください').required('入力してください'),
  password: yup.string().required('入力してください'),
  confirm: yup.string().required('入力してください'),
  firstNameKanji: yup.string().required('入力してください'),
  lastNameKanji: yup.string().required('入力してください'),
  firstNameKana: yup.string().required('入力してください'),
  lastNameKana: yup.string().required('入力してください'),
  gender: yup.string().required('入力してください'),
  birthdayY: yup.string().required('入力してください'),
  birthdayM: yup.string().required('入力してください'),
  birthdayD: yup.string().required('入力してください'),
  role: yup.string().required('入力してください'),
})

const createAddUserQuery = (params: IUserFormInput): insertUserFromAdminQuery => ({
  email: params.email,
  password: params.password,
  confirm: params.confirm,
  firstNameKanji: params.firstNameKanji,
  lastNameKanji: params.lastNameKanji,
  firstNameKana: params.firstNameKana,
  lastNameKana: params.lastNameKana,
  gender: params.gender,
  birthday: moment(
    `${ params.birthdayY }/${ params.birthdayM }/${ params.birthdayD }`,
    'YYYY-MM-DD'
  ).format('YYYY-MM-DD'),
  roleIds: [Number(params.role)]
})

const Users = () => {

  const dispatch = useDispatch()
  const { users, loading } = useSelector((state: RootState) => state.user)
  const { open, openModal, closeModal } = useModal(false)
  const formInitialState = {
    email: '1test@test.com',
    password: 'testtest',
    confirm: 'testtest',
    firstNameKanji: 'eugene',
    lastNameKanji: 'eugene',
    firstNameKana: 'eugene',
    lastNameKana: 'eugene',
    gender: 'male',
    birthdayY: '1991',
    birthdayM: '08',
    birthdayD: '29',
    role: '1'
  }
  const { input, ChangeHandler } = useInput(formInitialState)

  const onSubmit = useCallback(
    (e: IUserFormInput) => {
      const query = createAddUserQuery(e)
      dispatch(addUser(query))
    }, [dispatch, input]
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
        <ModalUserForm 
          onSubmit={ onSubmit }
          setValue={ ChangeHandler }
          validation={schema}
          formInitialState={formInitialState}
        />
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