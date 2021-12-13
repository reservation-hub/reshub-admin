import React, { useEffect, useState } from 'react'
import SalonList from '@/components/list/shop/SalonList'
import MainTemplate from '@components/common/layout/MainTemplate'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchShopList } from '@store/actions/shopAction'
import { RootState } from '@store/store'
import Paginate from '@components/common/atoms/Paginate'
import { Route, RouteComponentProps, Switch } from 'react-router-dom'
import Detail from './Detail'
import Loading from '@components/common/atoms/loading'
import history from '@utils/routes/history'
import { MatchParams } from '@components/common/_PropsType'
import Form from '@pages/shop/Form'
import { TCurrentPage } from '@components/list/_PropsType'
import Section from '@/components/common/layout/Section'
import SubHeader from '@/components/common/atoms/SubHeader'
import { HEADER_TYPE } from '@/constants/Common'
import InputFiled from '@/components/common/atoms/InputFiled'
import CustomButton from '@/components/common/atoms/CustomButton'

const Salon = ({
  match,
  location
}: RouteComponentProps<MatchParams, any, TCurrentPage>) => {
  const dispatch = useDispatch()
  const currentPage = location?.state?.currentPage
  const [page, setPage] = useState<number>(currentPage)
  const { shops, loading, user } = useSelector(
    (state: RootState) => ({
      loading: state.shop.loading,
      shops: state.shop.shops,
      user: state.auth.user
    }),
    shallowEqual
  )
  const [correct, setCorrect] = useState<boolean>(true)
  const order: 'asc' | 'desc' = correct ? 'desc' : 'asc'

  const authCheck = user.role.name === 'admin'

  const pageChangeHandler = (data: Record<string, any>) => {
    const pageNum: number = data['selected']
    setPage(pageNum + 1)
    history.push(`/salon?p=${pageNum + 1}`, {
      currentPage: pageNum + 1
    })
  }

  useEffect(() => {
    if (match.isExact) dispatch(fetchShopList(Number(currentPage), order))
  }, [page, dispatch, currentPage, match.isExact, order])

  return (
    <MainTemplate>
      <Switch>
        <Route exact path='/salon'>
          {loading ? (
            <Loading />
          ) : (
            <Section>
              <SubHeader
                title='サロン一覧'
                type={HEADER_TYPE.LIST}
                modalOpenHandler={() => history.push('/salon/form')}
              >
                <InputFiled />
                <CustomButton
                  classes='ml-2'
                  onClick={() => setCorrect(!correct)}
                >
                  並び替え
                </CustomButton>
              </SubHeader>
              <SalonList shops={shops.values} admin={authCheck} />
              <Paginate
                totalPage={shops.totalCount}
                page={currentPage}
                pageChangeHandler={pageChangeHandler}
              />
            </Section>
          )}
        </Route>
        <Route path='/salon/form' component={Form} />
        <Route path='/salon/:id' component={Detail} />
      </Switch>
    </MainTemplate>
  )
}
export default Salon
