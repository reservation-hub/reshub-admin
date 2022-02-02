import React, { useEffect, useState } from 'react'
import { Route, RouteComponentProps, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { MatchParams } from '@components/common/_PropsType'
import MainTemplate from '@components/common/layout/MainTemplate'
import { TCurrentPage } from '@components/list/_PropsType'
import usePagination from '@utils/hooks/usePagination'
import { fetchTagList } from '@store/actions/tagAction'
import { RootState } from '@store/store'
import Section from '@components/common/layout/Section'
import SubHeader from '@components/common/atoms/SubHeader'
import Form from '@pages/tag/Form'
import Loading from '@components/common/atoms/loading'
import CustomButton from '@components/common/atoms/CustomButton'
import { HEADER_TYPE } from '@constants/Common'
import Paginate from '@components/common/atoms/Paginate'
import TagList from '@components/list/tag/TagList'
import history from '@utils/routes/history'


const Tags = ({
    match,
    location
  }: RouteComponentProps<MatchParams, any, TCurrentPage>) => {
    const dispatch = useDispatch()
    const currentPage = location?.state?.currentPage
    const [page, setPage] = useState<number>(currentPage)
    const { tags, loading } = useSelector((state: RootState) => state.tag)
    const [correct, setCorrect] = useState<boolean>(true)
    const order: 'asc' | 'desc' = correct ? 'desc' : 'asc'
  
    const pageChangeHandler = usePagination('tags', page, setPage)
  
    useEffect(() => {
      if (match.isExact) dispatch(fetchTagList(Number(currentPage), order))
    }, [page, dispatch, currentPage, correct])
    
    console.log(tags)

    return (
      <MainTemplate>
        <Switch>
          <Section>
            <Route exact path='/tags'>
              {loading ? (
                <Loading />
              ) : (
                <>
                  <SubHeader
                    text='タグ一覧'
                    modalOpenHandler={() => history.push('/tags/form')}
                    type={HEADER_TYPE.LIST}
                  >
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
            <Route path='/tags/form' component={Form} />
          </Section>
        </Switch>
      </MainTemplate>
    )
  }

export default React.memo(Tags)
