import Loading from '@components/common/atoms/loading'
import SubHeader from '@components/common/atoms/SubHeader'
import MainTemplate from '@components/common/layout/MainTemplate'
import Section from '@components/common/layout/Section'
import { selectType } from '@components/common/_PropsType'
import MenuList from '@components/list/menu/MenuList'
import ShopSelect from '@components/list/reservations/ShopSelect'
import { HEADER_TYPE } from '@constants/Common'
import { fetchShopList } from '@store/actions/shopAction'
import { RootState } from '@store/store'
import { useSelect } from '@utils/hooks/useSelect'
import history from '@utils/routes/history'
import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

const Menu = () => {
  const { option, changeHandler } = useSelect('')
  const dispatch = useDispatch()

  const { shops, loading } = useSelector(
    (state: RootState) => ({
      shops: state.shop.shops.values,
      loading: state.menu?.loading,
      menus: state.menu?.menus
    }),
    shallowEqual
  )

  const shopSelect: selectType[] = shops?.map((shop) => ({
    value: String(shop.id),
    name: shop.name
  }))

  useEffect(() => {
    dispatch(fetchShopList(1, 'desc'))
  }, [dispatch, option])

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
                    <MenuList />
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
        </Section>
      </Switch>
    </MainTemplate>
  )
}

export default Menu
