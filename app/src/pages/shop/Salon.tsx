import React, { useEffect, useState } from 'react'
import SalonList from '@components/list/Shop/SalonList'
import MainTemplate from '@components/common/layout/MainTemplate'
import { useDispatch, useSelector } from 'react-redux'
import { fetchShopList } from '@store/actions/shopAction'
import { RootState } from '@store/store'
import Paginate from '@components/common/atoms/Paginate'
import { Route, RouteComponentProps, Switch } from 'react-router-dom'
import Detail from './Detail'
import Loading from '@components/common/atoms/loading'
import history from '@utils/history'
import { MatchParams } from '@components/common/_PropsType'
import Form from '@pages/shop/Form'

const Salon = ({ match }: RouteComponentProps<MatchParams>) => {
  const dispatch = useDispatch()

  const currentPage = localStorage.getItem('currentPage')
    ? localStorage.getItem('currentPage')
    : 1
  const [page, setPage] = useState<number>(Number(currentPage))
  localStorage.setItem('currentPage', String(page))

  const { shops, loading } = useSelector((state: RootState) => state.shop)

  useEffect(() => {
    if (match.isExact) dispatch(fetchShopList(Number(currentPage)))
  }, [page, dispatch, currentPage, match.isExact])

  return (
    <MainTemplate>
      {loading ? (
        <Loading />
      ) : (
        <Switch>
          <Route exact path='/salon'>
            <SalonList
              shops={shops.values}
              modalOpenHandler={() => history.push('/salon/form')}
            />
            <Paginate
              totalPage={shops.totalCount}
              setPage={setPage}
              page={currentPage}
            />
          </Route>
          <Route path='/salon/form' component={Form} />
          <Route path='/salon/:id' component={Detail} />
        </Switch>
      )}
    </MainTemplate>
  )
}
export default Salon
