import React, { useEffect, useState } from 'react'
import { Route, RouteComponentProps, Switch } from 'react-router-dom'
import ShopSelect from '@components/list/ShopSelect'
import { useDispatch, useSelector } from 'react-redux'
import { MatchParams } from '@components/common/_PropsType'
import MainTemplate from '@components/common/layout/MainTemplate'
import { TCurrentPage } from '@components/list/_PropsType'
import usePagination from '@utils/hooks/usePagination'
import { fetchTagList } from '@store/actions/shopTagAction'
import { RootState } from '@store/store'
import Section from '@components/common/layout/Section'
import SubHeader from '@components/common/atoms/SubHeader'
import Form from '@pages/staff/tag/Form'
import Loading from '@components/common/atoms/loading'
import CustomButton from '@components/common/atoms/CustomButton'
import { HEADER_TYPE } from '@constants/Common'
import Paginate from '@components/common/atoms/Paginate'
import TagList from '@components/list/tag/TagList'
import history from '@utils/routes/history'
import { useShopSelect } from '@utils/hooks/useShopSelect'

const ShopTags = ({
  match,
  location
}: RouteComponentProps<MatchParams, any, TCurrentPage>) => {
  const dispatch = useDispatch()
  const currentPage = location?.state?.currentPage
  const [page, setPage] = useState<number>(currentPage)
  const { tags } = useSelector((state: RootState) => state.shopTag)
  const [correct, setCorrect] = useState<boolean>(true)
  const order: 'asc' | 'desc' = correct ? 'desc' : 'asc'
  const { option, control, shopSelect, loading } = useShopSelect(1)

  const pageChangeHandler = usePagination('shop_tags', page, setPage)

  useEffect(() => {
    if (match.isExact)
      dispatch(fetchTagList(Number(option), Number(currentPage), order))
  }, [page, dispatch, currentPage, correct])

  return (
    <MainTemplate>
      <Switch>
        <Section>
          <Route exact path='/shop_tags'>
            {loading ? (
              <Loading />
            ) : (
              <>
                <SubHeader
                  text='タグ一覧'
                  modalOpenHandler={() =>
                    history.push('/shop_tags/form', { option })
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
                <TagList item={tags.values} />
                <Paginate
                  totalPage={tags.totalCount}
                  page={currentPage}
                  pageChangeHandler={pageChangeHandler}
                />
              </>
            )}
          </Route>
          <Route path='/shop_tags/form' component={Form} />
        </Section>
      </Switch>
    </MainTemplate>
  )
}

export default React.memo(ShopTags)
