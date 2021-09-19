import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import { RootState } from '../../store/store'
import { fetchUserList } from '../../store/actions/userAction'
import { useModal } from '../../utils/useModal'
import UserList from '../../components/user/userlist/UserList'
import Profile from './Profile'
import ModalOverlay from '../../components/modal/ModalOverlay'
import MainTemplate from '../../components/common/layout/MainTemplate'
import Loading from '../../components/common/atoms/loading'
import Paginate from '../../components/common/atoms/Paginate'
import ModalAlert from '../../components/modal/ModalAlert'
import history from '../../utils/history'

const Users = () => {

  const dispatch = useDispatch()
  const [page, setPage] = useState<number>(1)
  const { users, loading } = useSelector((state: RootState) => state.user)
  const { open, openModal, closeModal } = useModal(false, 'form')

  useEffect(() => {
    dispatch(fetchUserList(page))
  }, [page, dispatch])

  return (
    <MainTemplate>
      { loading ? <Loading/>
        : <>
          <Route exact path="/users">
            <UserList
              users={ users.values }
              modalOpenHandler={ openModal }
            />
            <Paginate totalPage={ users.totalCount } setPage={ setPage }/>
          </Route>
          <Route path="/users/:id" component={ Profile }/>
        </>
      }
      <ModalOverlay
        modalOpen={ open }
        modalCloseHandler={ closeModal }
      >
        <ModalAlert
          modalCloseHandler={ closeModal }
          modalHandler={ () => history.push('/form/user') }
          alertText="ユーザー登録画面に移動しますか？"
          buttonText="移動"
        />
      </ModalOverlay>
    </MainTemplate>
  )
}

export default Users 
