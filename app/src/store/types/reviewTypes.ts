import {
  ReviewListResponse,
  ReviewResponse
} from '@utils/api/request-response-types/Shop'
import { DefaultState } from '@store/store'

export const REVIEW_TYPE = {
  REQUEST_START: 'REVIEW_REQUEST_START',
  REQUEST_SUCCESS: 'REVIEW_REQUEST_SUCCESS',
  GET_SUCCESS: 'REVIEW_GET_SUCCESS',
  REQUEST_FAILURE: 'REVIEW_REQUEST_FAILURE'
} as const

export type ReviewState = DefaultState & {
  reviews: ReviewListResponse
  review: ReviewResponse
}
