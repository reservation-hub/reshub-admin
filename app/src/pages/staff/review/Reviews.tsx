import React, { useEffect, useState } from 'react'
import { Route, RouteComponentProps, Switch } from 'react-router-dom'
import ShopSelect from '@components/list/ShopSelect'
import { useDispatch, useSelector } from 'react-redux'
import { MatchParams } from '@components/common/_PropsType'
import MainTemplate from '@components/common/layout/MainTemplate'
import { TCurrentPage } from '@components/list/_PropsType'
import usePagination from '@utils/hooks/usePagination'
import { fetchAllReview } from '@store/actions/reviewAction'
import { RootState } from '@store/store'
import Section from '@components/common/layout/Section'
import SubHeader from '@components/common/atoms/SubHeader'
import Loading from '@components/common/atoms/loading'
import CustomButton from '@components/common/atoms/CustomButton'
import { HEADER_TYPE } from '@constants/Common'
import Paginate from '@components/common/atoms/Paginate'
import ReviewList from '@components/list/review/ReviewList'
import history from '@utils/routes/history'
import { useShopSelect } from '@utils/hooks/useShopSelect'
import Detail from './Detail'

const ShopReviews = ({
  match,
  location
}: RouteComponentProps<MatchParams, any, TCurrentPage>) => {
  const dispatch = useDispatch()
  const currentPage = location?.state?.currentPage
  const [page, setPage] = useState<number>(currentPage)
  const { reviews } = useSelector((state: RootState) => state.review)
  const [correct, setCorrect] = useState<boolean>(true)
  const order: 'asc' | 'desc' = correct ? 'desc' : 'asc'
  const { option, control, shopSelect, loading } = useShopSelect(1)

  const pageChangeHandler = usePagination('review', page, setPage)

  useEffect(() => {
    if (match.isExact)
      dispatch(fetchAllReview(Number(option), Number(currentPage), order))
  }, [page, dispatch, currentPage, correct])

  return (
    <MainTemplate>
      <Switch>
        <Section>
          <Route exact path='/review'>
            {loading ? (
              <Loading />
            ) : (
              <>
                <SubHeader
                  text='口コミ一覧'
                  modalOpenHandler={() =>
                    history.push('/review/form', { option })
                  }
                  type={HEADER_TYPE.LIST}
                >
                  <ShopSelect
                    item={shopSelect}
                    control={control}
                    listStyle
                    name='shopId'
                  />
                  <CustomButton
                    classes='ml-2'
                    onClick={() => setCorrect(!correct)}
                  >
                    並び替え
                  </CustomButton>
                </SubHeader>
                <ReviewList item={reviews.values} />
                <Paginate
                  totalPage={reviews.totalCount}
                  page={currentPage}
                  pageChangeHandler={pageChangeHandler}
                />
              </>
            )}
          </Route>
          <Route path='/review/detail/:id' component={Detail} />
        </Section>
      </Switch>
    </MainTemplate>
  )
}

export default React.memo(ShopReviews)
