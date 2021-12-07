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
  const [correct, setCorrect] = useState<boolean>(true)
  const order: 'asc' | 'desc' = correct ? 'desc' : 'asc'

  const pageChangeHandler = (data: Record<string, any>) => {
    const pageNum: number = data['selected']
    setPage(pageNum + 1)
    history.push(`/users?p=${pageNum + 1}`, {
      currentPage: pageNum + 1
    })
  }

  useEffect(() => {
    if (match.isExact) dispatch(fetchUserList(Number(currentPage), order))
  }, [page, dispatch, currentPage, correct])

  return (
    <MainTemplate>
      <Switch>
        <Route exact path='/users'>
          {loading ? (
            <Loading />
          ) : (
            <>
              <UserList
                users={users.values}
                order={setCorrect}
                correct={correct}
                modalOpenHandler={() => history.push('/users/form')}
              />
              <Paginate
                totalPage={users.totalCount}
                page={currentPage}
                pageChangeHandler={pageChangeHandler}
              />
            </>
          )}
        </Route>
        <Route path='/users/form' component={Form} />
        <Route path='/users/:id' component={Profile} />
      </Switch>
    </MainTemplate>
  )
}

export default React.memo(Users)
