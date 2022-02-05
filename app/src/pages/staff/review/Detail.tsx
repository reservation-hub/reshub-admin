import React, { useCallback, useEffect } from 'react'
import { MatchParams } from '@components/common/_PropsType'
import ModalAlert from '@components/modal/ModalAlert'
import ModalOverlay from '@components/modal/ModalOverlay'
import { getReview } from '@store/actions/reviewAction'
import { RootState } from '@store/store'
import { useModal } from '@utils/hooks/useModal'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import ReviewDetail from '@components/detail/review/ReviewDetail'
import Loading from '@components/common/atoms/loading'
import { TStateInId } from '@components/detail/_PropsType'
import history from '@utils/routes/history'

const Detail = ({
  match,
  location
}: RouteComponentProps<MatchParams, any, TStateInId>) => {
  const { id } = match.params
  const dispatch = useDispatch()
  const convertId = Number(id)
  const shopId = Number(location.state.shopId)

  const { review, loading } = useSelector(
    (state: RootState) => state.review
  )

  console.log(review)

  useEffect(() => {
    dispatch(getReview(shopId, convertId))
  }, [dispatch, shopId, convertId])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ReviewDetail
          item={review}
        />
      )}
    </>
  )
}

export default Detail
