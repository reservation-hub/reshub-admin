import React, { useEffect, useState } from 'react'
import { fetchAllMenu } from '@store/actions/menuAction'
import usePagination from '@utils/hooks/usePagination'
import Loading from '@components/common/atoms/loading'
import SubHeader from '@components/common/atoms/SubHeader'
import MainTemplate from '@components/common/layout/MainTemplate'
import Section from '@components/common/layout/Section'
import { MatchParams } from '@components/common/_PropsType'
import MenuList from '@components/list/menu/MenuList'
import ShopSelect from '@components/list/ShopSelect'
import { HEADER_TYPE } from '@constants/Common'
import { RootState } from '@store/store'
import history from '@utils/routes/history'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Route, RouteComponentProps, Switch } from 'react-router-dom'
import Detail from './Detail'
import Form from './Form'
import { TCurrentPage } from '@components/list/_PropsType'
import CustomButton from '@components/common/atoms/CustomButton'
import { useShopSelect } from '@utils/hooks/useShopSelect'

const Menu = ({
  match,
  location
}: RouteComponentProps<MatchParams, any, TCurrentPage>) => {
  const currentPage = location?.state?.currentPage
  const [page, setPage] = useState<number>(currentPage)
  const [order, setOrder] = useState<'desc' | 'asc'>('desc')
  const pageChangeHandler = usePagination('menu', page, setPage)
  const { option, control, shopSelect, loading } = useShopSelect(page)
  const dispatch = useDispatch()

  const { menus } = useSelector(
    (state: RootState) => ({
      menus: state.menu.menus
    }),
    shallowEqual
  )

  useEffect(() => {
    if (option && match.isExact) {
      dispatch(fetchAllMenu(Number(option), page, order))
    }
  }, [dispatch, option, match.isExact, page, order])

  return (
    <MainTemplate>
      <Switch>
        <Section>
          <Route exact path='/menu'>
            {loading ? (
              <Loading />
            ) : (
              <>
                <SubHeader
                  text='メニュー一覧'
                  type={HEADER_TYPE.LIST}
                  modalOpenHandler={() => history.push('/menu/new', { option })}
                >
                  <ShopSelect
                    item={shopSelect}
                    control={control}
                    listStyle
                    name='shopId'
                  />
                  <CustomButton
                    onClick={() =>
                      order === 'desc' ? setOrder('asc') : setOrder('desc')
                    }
                    classes='min-w-[12rem] ml-2'
                  >
                    並び替え
                  </CustomButton>
                </SubHeader>
                <MenuList
                  item={option ? menus.values : []}
                  page={page}
                  totalPage={menus?.totalCount}
                  pageChangeHandler={pageChangeHandler}
                  usePaginate
                />
              </>
            )}
          </Route>
          <Route path='/menu/detail/:id' component={Detail} />
          <Route path='/menu/(new|edit)' component={Form} />
        </Section>
      </Switch>
    </MainTemplate>
  )
}

export default Menu
