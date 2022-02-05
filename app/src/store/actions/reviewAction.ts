import {
  ReviewListResponse,
  ReviewResponse
} from '@utils/api/request-response-types/Shop'
import { REVIEW_TYPE } from '@store/types/reviewTypes'
import { RootState, typedAction } from '@store/store'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import apiEndpoint from '@utils/api/apiEndpoint'
import history from '@utils/routes/history'

const reviewRequestStart = () => {
  return typedAction(REVIEW_TYPE.REQUEST_START)
}

const fetchAllSuccess = (data: ReviewListResponse) => {
  return typedAction(REVIEW_TYPE.REQUEST_SUCCESS, data)
}

const getSuccess = (data: ReviewResponse) => {
  return typedAction(REVIEW_TYPE.GET_SUCCESS, data)
}

const requestFailure = (data: string) => {
  return typedAction(REVIEW_TYPE.REQUEST_FAILURE, data)
}

export const fetchAllReview =
  (
    shopId: number,
    page: number,
    order: 'asc' | 'desc'
  ): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(reviewRequestStart())
    try {
      const res = await apiEndpoint.reviews.fetchAll(shopId, page, order)
      dispatch(fetchAllSuccess(res.data))
    } catch {
      history.push('/error')
    }
  }

export const getReview =
  (
    shopId: number,
    reviewId: number
  ): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(reviewRequestStart())
    try {
      const res = await apiEndpoint.reviews.getReview(shopId, reviewId)
      dispatch(getSuccess(res.data))
    } catch {
      history.push('/error')
    }
  }

export type ReviewAction =
  | ReturnType<typeof reviewRequestStart>
  | ReturnType<typeof fetchAllSuccess>
  | ReturnType<typeof getSuccess>
  | ReturnType<typeof requestFailure>
