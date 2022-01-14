import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, RouteComponentProps, Switch } from 'react-router-dom'
import { RootState } from '@store/store'
import { fetchUserList } from '@store/actions/userAction'
import UserList from '@components/list/user/UserList'
import Profile from './Profile'
import MainTemplate from '@components/common/layout/MainTemplate'
import Loading from '@components/common/atoms/loading'
import Paginate from '@components/common/atoms/Paginate'
import history from '@utils/routes/history'
import { MatchParams } from '@components/common/_PropsType'
import Form from '@pages/user/Form'
import { TCurrentPage } from '@components/list/_PropsType'
import Section from '@components/common/layout/Section'
import SubHeader from '@components/common/atoms/SubHeader'
import CustomButton from '@components/common/atoms/CustomButton'
import { HEADER_TYPE } from '@constants/Common'
import usePagination from '@utils/hooks/usePagination'

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

  const pageChangeHandler = usePagination('users', page, setPage)

  useEffect(() => {
    if (match.isExact) dispatch(fetchUserList(Number(currentPage), order))
  }, [page, dispatch, currentPage, correct])

  return (
    <MainTemplate>
      <Switch>
        <Section>
          <Route exact path='/users'>
            {loading ? (
              <Loading />
            ) : (
              <>
                <SubHeader
                  title='ユーザー一覧'
                  modalOpenHandler={() => history.push('/users/form')}
                  type={HEADER_TYPE.LIST}
                >
                  <CustomButton
                    classes='ml-2'
                    onClick={() => setCorrect(!correct)}
                  >
                    並び替え
                  </CustomButton>
                </SubHeader>
                <UserList item={users.values} />
                <Paginate
                  totalPage={users.totalCount}
                  page={currentPage}
                  pageChangeHandler={pageChangeHandler}
                />
              </>
            )}
          </Route>
          <Route path='/users/form' component={Form} />
          <Route path='/users/detail/:id' component={Profile} />
        </Section>
      </Switch>
    </MainTemplate>
  )
}

export default React.memo(Users)
