import { useCallback, useEffect } from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import { RootState } from '../../store/store'
import { addUser, fetchUserList } from '../../store/actions/userAction'
import { useModal } from '../../utils/useModal'
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
  firstNameKana: yup.string().matches(/^[\u30A0-\u30FF]+$/, 'カタカナで入力してください').required('入力してください'),
  lastNameKana: yup.string().matches(/^[\u30A0-\u30FF]+$/, 'カタカナで入力してください').required('入力してください'),
  gender: yup.string().required('入力してください'),
  birthdayY: yup.string().matches(/^(19|20)\d\d$/, '1900から2099の入力でお願いします').required('入力してください'),
  birthdayM: yup.string().matches(/^0[1-9]|1[0-2]$/, '01から12の入力でお願いします').required('入力してください'),
  birthdayD: yup.string().matches(/^0[1-9]|[12]\d|3[01]$/, '01から31の入力でお願いします').required('入力してください'),
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
    email: '',
    password: '',
    confirm: '',
    firstNameKanji: '',
    lastNameKanji: '',
    firstNameKana: '',
    lastNameKana: '',
    gender: '',
    birthdayY: '',
    birthdayM: '',
    birthdayD: '',
    role: ''
  }

  const onSubmit = useCallback(
    (e: IUserFormInput) => {
      const query = createAddUserQuery(e)
      dispatch(addUser(query))
    }, [dispatch]
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
          validation={schema}
          formInitialState={formInitialState}
        />
      </ModalOverlay>
      <Route exact path='/users'>
        <UserList
          users={ users.values }
          modalOpenHandler={ openModal }
        />
      </Route>
      <Route path='/users/:id' component={ Profile } />
    </MainTemplate>
  )
}

export default Users