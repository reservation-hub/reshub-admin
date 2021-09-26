import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, RouteComponentProps } from 'react-router-dom'
import { RootState } from '../../store/store'
import { fetchUserList } from '../../store/actions/userAction'
import { useModal } from '../../utils/useModal'
import UserList from '../../components/list/User/UserList'
import Profile from './Profile'
import ModalOverlay from '../../components/modal/ModalOverlay'
import MainTemplate from '../../components/common/layout/MainTemplate'
import Loading from '../../components/common/atoms/loading'
import Paginate from '../../components/common/atoms/Paginate'
import ModalAlert from '../../components/modal/ModalAlert'
import history from '../../utils/history'
import { MatchParams } from '../../components/common/_PropsType'

const Users = ({ match }: RouteComponentProps<MatchParams>) => {
  const dispatch = useDispatch()
  const currentPage = localStorage.getItem('currentPage')
    ? localStorage.getItem('currentPage')
    : 1
  const [page, setPage] = useState<number>(Number(currentPage))
  localStorage.setItem('currentPage', String(page))

  const { users, loading } = useSelector((state: RootState) => state.user)
  const { open, openModal, closeModal } = useModal(false, 'form')

  useEffect(() => {
    if (match.isExact) dispatch(fetchUserList(Number(currentPage)))
  }, [page, dispatch, currentPage, match.isExact])

  return (
    <MainTemplate>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Route exact path='/users'>
            <UserList users={users.values} modalOpenHandler={openModal} />
            <Paginate
              totalPage={users.totalCount}
              setPage={setPage}
              page={currentPage}
            />
          </Route>
          <Route path='/users/:id' component={Profile} />
        </>
      )}
      <ModalOverlay modalOpen={open} modalCloseHandler={closeModal}>
        <ModalAlert
          modalCloseHandler={closeModal}
          modalHandler={() => history.push('/form/user')}
          alertText='ユーザー登録画面に移動しますか？'
          buttonText='移動'
        />
      </ModalOverlay>
    </MainTemplate>
  )
}

export default Users
