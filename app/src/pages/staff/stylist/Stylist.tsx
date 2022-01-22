import React, { useEffect, useState } from 'react'
import MainTemplate from '@components/common/layout/MainTemplate'
import { Route, RouteComponentProps, Switch } from 'react-router-dom'
import Section from '@components/common/layout/Section'
import { MatchParams } from '@components/common/_PropsType'
import usePagination from '@utils/hooks/usePagination'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@store/store'
import { fetchAllStylist } from '@store/actions/stylistAction'
import Loading from '@components/common/atoms/loading'
import SubHeader from '@components/common/atoms/SubHeader'
import { HEADER_TYPE } from '@constants/Common'
import history from '@utils/routes/history'
import ShopSelect from '@components/list/ShopSelect'
import StylistList from '@components/list/stylist/StylistList'
import Detail from '@pages/staff/stylist/Detail'
import Form from './Form'
import { TCurrentPage } from '@components/list/_PropsType'
import CustomButton from '@components/common/atoms/CustomButton'
import { useShopSelect } from '@utils/hooks/useShopSelect'

const Stylist = ({
  match,
  location
}: RouteComponentProps<MatchParams, any, TCurrentPage>) => {
  const currentPage = location?.state.currentPage
  const [page, setPage] = useState<number>(currentPage)
  const [order, setOrder] = useState<'desc' | 'asc'>('desc')
  const pageChangeHandler = usePagination('stylist', page, setPage)
  const { option, control, shopSelect, loading } = useShopSelect(1)
  const dispatch = useDispatch()

  const { stylists } = useSelector((state: RootState) => state.stylist)

  useEffect(() => {
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
                  text='スタイリスト一覧'
                  type={HEADER_TYPE.LIST}
                  modalOpenHandler={() =>
                    history.push('/stylist/new', { option })
                  }
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
