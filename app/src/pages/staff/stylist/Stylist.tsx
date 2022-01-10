import React, { useEffect, useState } from 'react'
import MainTemplate from '@components/common/layout/MainTemplate'
import { Route, RouteComponentProps, Switch } from 'react-router-dom'
import Section from '@components/common/layout/Section'
import { MatchParams, selectType } from '@components/common/_PropsType'
import { useSelect } from '@utils/hooks/useSelect'
import usePagination from '@utils/hooks/usePagination'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RootState } from '@store/store'
import { fetchAllStylist } from '@store/actions/stylistAction'
import { fetchShopList } from '@store/actions/shopAction'
import Loading from '@components/common/atoms/loading'
import SubHeader from '@components/common/atoms/SubHeader'
import { HEADER_TYPE } from '@constants/Common'
import history from '@utils/routes/history'
import ShopSelect from '@components/list/reservations/ShopSelect'
import StylistList from '@components/list/stylist/StylistList'
import Detail from '@pages/staff/stylist/Detail'

const Stylist = ({
  match,
  location
}: RouteComponentProps<MatchParams, any, any>) => {
  const { option, changeHandler } = useSelect('')
  const currentPage = location?.state?.currentPage
  const [page, setPage] = useState<number>(currentPage)
  const pageChangeHandler = usePagination('stylist', page, setPage)
  const dispatch = useDispatch()

  const { shops, loading, stylists } = useSelector(
    (state: RootState) => ({
      shops: state.shop.shops.values,
      loading: state.shop.loading,
      stylists: state.stylist.stylists
    }),
    shallowEqual
  )
  
  const shopSelect: selectType[] = shops?.map((shop) => ({
    value: String(shop.id),
    name: shop.name
  }))

  useEffect(() => {
    dispatch(fetchShopList(1, 'desc'))
    if (option && match.isExact) {
      dispatch(fetchAllStylist(Number(option), page, 'desc'))
    }
  }, [dispatch, option, match.isExact, page])

  return (
    <MainTemplate>
      <Switch>
        <Section>
          <Route exact path='/stylist'>
            {loading ? (
              <Loading />
            ): (
              <>
                {option ? (
                  <>
                    <SubHeader
                      title='スタイリスト一覧'
                      type={HEADER_TYPE.LIST}
                      modalOpenHandler={() => history.push('/stylist/new')}
                    >
                      <ShopSelect 
                        data={shopSelect}
                        value={option}
                        onChange={changeHandler}
                        listStyle
                      />
                    </SubHeader>
                    <StylistList
                      item={option ? stylists?.values : []}
                      page={page}
                      totalPage={stylists?.totalCount}
                      pageChangeHandler={pageChangeHandler}
                      usePaginate
                    />
                  </>
                ) : (
                  <ShopSelect
                    data={shopSelect}
                    value={option}
                    onChange={changeHandler}
                  />
                )}
              </>
            )}
          </Route>
          <Route path='/stylist/:id' component={Detail} />
        </Section>
      </Switch>
    </MainTemplate>
  )
}

export default Stylist
