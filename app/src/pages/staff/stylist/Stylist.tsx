import React, { useEffect, useState } from 'react'
import MainTemplate from '@components/common/layout/MainTemplate'
import { Route, RouteComponentProps, Switch } from 'react-router-dom'
import Section from '@components/common/layout/Section'
import { MatchParams, OptionsType } from '@components/common/_PropsType'
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
import { useForm } from 'react-hook-form'
import Form from './Form'
import { TCurrentPage } from '@components/list/_PropsType'
import CustomButton from '@components/common/atoms/CustomButton'

const Stylist = ({
  match,
  location
}: RouteComponentProps<MatchParams, any, TCurrentPage>) => {
  const currentPage = location?.state.currentPage
  const [page, setPage] = useState<number>(currentPage)
  const [order, setOrder] = useState<'desc' | 'asc'>('desc')
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

  const { watch, control } = useForm({
    defaultValues: {
      shopId: shops && shops.find((shop) => shop)?.id
    }
  })

  const option = watch('shopId')

  const shopSelect: OptionsType[] = shops?.map((shop) => ({
    value: String(shop.id),
    label: shop.name
  }))

  useEffect(() => {
    dispatch(fetchShopList(1, 'desc'))
    if (option && match.isExact) {
      dispatch(fetchAllStylist(Number(option), page, order))
    }
  }, [dispatch, option, match.isExact, page, order])

  return (
    <MainTemplate>
      <Switch>
        <Section>
          <Route exact path='/stylist'>
            {loading ? (
              <Loading />
            ) : (
              <>
                <SubHeader
                  title='スタイリスト一覧'
                  type={HEADER_TYPE.LIST}
                  modalOpenHandler={() =>
                    history.push('/stylist/new', { option, shops })
                  }
                >
                  <ShopSelect
                    data={shopSelect}
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
                <StylistList
                  item={option ? stylists?.values : []}
                  page={page}
                  totalPage={stylists?.totalCount}
                  pageChangeHandler={pageChangeHandler}
                  usePaginate
                />
              </>
            )}
          </Route>
          <Route path='/stylist/detail/:id' component={Detail} />
          <Route path='/stylist/(new|edit)' component={Form} />
        </Section>
      </Switch>
    </MainTemplate>
  )
}

export default Stylist
