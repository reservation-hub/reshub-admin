import { useCallback, useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import { RootState } from '../../store/store'
import { addUser, fetchUserList } from '../../store/actions/userAction'
import { useModal } from '../../utils/useModal'
import { IUserFormInput } from '../../components/modal/_PropsType'
import { insertUserFromAdminQuery } from '../../utils/api/request-response-types/UserService'

import UserList from '../../components/user/userlist/UserList'
import Profile from './Profile'
import ModalUserForm from '../../components/modal/ModalUserForm'
import ModalOverlay from '../../components/modal/ModalOverlay'
import MainTemplate from '../../components/common/layout/MainTemplate'
import * as yup from 'yup'
import dayjs from 'dayjs'
import Loading from '../../components/common/atoms/loading'
import FormHeader from '../../components/modal/FormHeader'
import Paginate from '../../components/common/atoms/Paginate'

export const schema = yup.object({
  email: yup.string().email('正しいメールアドレスを入力してください'),
  password: yup.string(),
  confirm: yup.string(),
  firstNameKanji: yup.string(),
  lastNameKanji: yup.string(),
  firstNameKana: yup.string().matches(/^[\u30A0-\u30FF]+$/, 'カタカナで入力してください'),
  lastNameKana: yup.string().matches(/^[\u30A0-\u30FF]+$/, 'カタカナで入力してください'),
  gender: yup.string(),
  birthdayY: yup.string().matches(/^(19|20)\d\d$/, '1900から2099の入力でお願いします'),
  birthdayM: yup.string().matches(/^0[1-9]|1[0-2]$/, '01から12の入力でお願いします'),
  birthdayD: yup.string().matches(/^0[1-9]|[12]\d|3[01]$/, '01から31の入力でお願いします'),
  role: yup.string()
})

const createAddUserQuery = (params: IUserFormInput): insertUserFromAdminQuery => ( {
  email: params.email,
  password: params.password,
  confirm: params.confirm,
  firstNameKanji: params.firstNameKanji,
  lastNameKanji: params.lastNameKanji,
  firstNameKana: params.firstNameKana,
  lastNameKana: params.lastNameKana,
  gender: params.gender,
  birthday: dayjs(
    `${ params.birthdayY }/${ params.birthdayM }/${ params.birthdayD }`
  ).format('YYYY-MM-DD'),
  roleIds: [Number(params.role)]
} )

const Users = () => {
  
  const dispatch = useDispatch()
  const [page, setPage] = useState<number>(1)
  const { users, loading } = useSelector((state: RootState) => state.user)
  const { open, openModal, closeModal } = useModal(false, 'form')
  
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
      closeModal()
    }, [dispatch, closeModal]
  )
  
  useEffect(() => {
    dispatch(fetchUserList(page))
  }, [page, dispatch])
  
  return (
    <MainTemplate>
      { loading ? <Loading />
        : <>
          <Route exact path='/users'>
            <UserList
              users={ users.values }
              modalOpenHandler={ openModal }
            />
            <Paginate page={ page } totalPage={ users.totalCount } setPage={ setPage } perPage={ 10 } />
          </Route>
          <Route path='/users/:id' component={ Profile } />
        </>
      }
      <ModalOverlay
        modalOpen={ open }
        modalCloseHandler={ closeModal }
      >
        <FormHeader modalCloseHandler={ closeModal } modalTitle='ユーザー登録' />
        <ModalUserForm
          onSubmit={ onSubmit }
          validation={ schema }
          formInitialState={ formInitialState }
        />
      </ModalOverlay>
    </MainTemplate>
  )
}

export default Users 
