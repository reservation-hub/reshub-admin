import React, { useEffect } from 'react'
import { MatchParams } from '@components/common/_PropsType'
import { getReview } from '@store/actions/reviewAction'
import { RootState } from '@store/store'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import ReviewDetail from '@components/detail/review/ReviewDetail'
import Loading from '@components/common/atoms/loading'
import { TStateInId } from '@components/detail/_PropsType'

const Detail = ({
  match,
  location
}: RouteComponentProps<MatchParams, any, TStateInId>) => {
  const { id } = match.params
  const dispatch = useDispatch()
  const convertId = Number(id)
  const shopId = Number(location.state.shopId)

  const { review, loading } = useSelector((state: RootState) => state.review)

  useEffect(() => {
    dispatch(getReview(shopId, convertId))
  }, [dispatch, shopId, convertId])

  return <>{loading ? <Loading /> : <ReviewDetail item={review} />}</>
}

export default Detail
