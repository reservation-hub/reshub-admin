import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, RouteComponentProps, Switch } from 'react-router-dom'
import { RootState } from '@store/store'
import { fetchUserList } from '@store/actions/userAction'
import UserList from '@components/list/User/UserList'
import Profile from './Profile'
import MainTemplate from '@components/common/layout/MainTemplate'
import Loading from '@components/common/atoms/loading'
import Paginate from '@components/common/atoms/Paginate'
import history from '@utils/history'
import { MatchParams } from '@components/common/_PropsType'
import Form from '@pages/user/Form'

const Users = ({ match }: RouteComponentProps<MatchParams>) => {
  const dispatch = useDispatch()
  const currentPage = localStorage.getItem('currentPage')
    ? localStorage.getItem('currentPage')
    : 1
  const [page, setPage] = useState<number>(Number(currentPage))
  localStorage.setItem('currentPage', String(page))

  const { users, loading } = useSelector((state: RootState) => state.user)

  useEffect(() => {
    if (match.isExact) dispatch(fetchUserList(Number(currentPage)))
  }, [page, dispatch, currentPage, match.isExact])

  return (
    <MainTemplate>
      {loading ? (
        <Loading />
      ) : (
        <Switch>
          <Route exact path='/users'>
            <UserList
              users={users.values}
              modalOpenHandler={() => history.push('/users/form')}
            />
            <Paginate
              totalPage={users.totalCount}
              setPage={setPage}
              page={currentPage}
            />
          </Route>
          <Route path='/users/form' component={Form} />
          <Route path='/users/:id' component={Profile} />
        </Switch>
      )}
    </MainTemplate>
  )
}

export default Users
