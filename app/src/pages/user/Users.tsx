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
import history from '@utils/routes/history'
import { MatchParams } from '@components/common/_PropsType'
import Form from '@pages/user/Form'
import { TCurrentPage } from '@components/list/_PropsType'

const Users = ({
  match,
  location
}: RouteComponentProps<MatchParams, any, TCurrentPage>) => {
  const dispatch = useDispatch()
  const currentPage = location?.state?.currentPage
  const [page, setPage] = useState<number>(currentPage)
  const { users, loading } = useSelector((state: RootState) => state.user)

  const pageChangeHandler = (data: any | number[]) => {
    const pageNum = data['selected']
    setPage(pageNum + 1)
    history.push(`/users?p=${pageNum + 1}`, {
      currentPage: pageNum + 1
    })
  }

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
              page={currentPage}
              pageChangeHandler={pageChangeHandler}
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
