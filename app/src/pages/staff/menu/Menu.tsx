import React, { useEffect, useState } from 'react'
import { fetchAllMenu } from '@store/actions/menuAction'
import usePagination from '@utils/hooks/usePagination'
import Loading from '@components/common/atoms/loading'
import SubHeader from '@components/common/atoms/SubHeader'
import MainTemplate from '@components/common/layout/MainTemplate'
import Section from '@components/common/layout/Section'
import { MatchParams, selectType } from '@components/common/_PropsType'
import MenuList from '@components/list/menu/MenuList'
import ShopSelect from '@components/list/reservations/ShopSelect'
import { HEADER_TYPE } from '@constants/Common'
import { fetchShopList } from '@store/actions/shopAction'
import { RootState } from '@store/store'
import { useSelect } from '@utils/hooks/useSelect'
import history from '@utils/routes/history'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Route, RouteComponentProps, Switch } from 'react-router-dom'
import Detail from './Detail'

const Menu = ({
  match,
  location
}: RouteComponentProps<MatchParams, any, any>) => {
  const { option, changeHandler } = useSelect('')
  const currentPage = location?.state?.currentPage
  const [page, setPage] = useState<number>(currentPage)
  const pageChangeHandler = usePagination('menu', page, setPage)
  const dispatch = useDispatch()

  const { shops, loading, menus } = useSelector(
    (state: RootState) => ({
      shops: state.shop.shops.values,
      loading: state.shop.loading,
      menus: state.menu.menus
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
      dispatch(fetchAllMenu(Number(option), page, 'desc'))
    }
  }, [dispatch, option, match.isExact, page])

  return (
    <MainTemplate>
      <Switch>
        <Section>
          <Route exact path='/menu'>
            {loading ? (
              <Loading />
            ) : (
              <>
                {option ? (
                  <>
                    <SubHeader
                      title='メニュー一覧'
                      type={HEADER_TYPE.LIST}
                      modalOpenHandler={() => history.push('/menu/new')}
                    >
                      <ShopSelect
                        data={shopSelect}
                        value={option}
                        onChange={changeHandler}
                        listStyle
                      />
                    </SubHeader>
                    <MenuList
                      item={option ? menus.values : []}
                      page={page}
                      totalPage={menus?.totalCount}
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
          <Route path='/menu/:id' component={Detail} />
        </Section>
      </Switch>
    </MainTemplate>
  )
}

export default Menu
