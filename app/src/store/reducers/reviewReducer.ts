import {
  ReviewListResponse,
  ReviewResponse
} from '@utils/api/request-response-types/Shop'
import { ReviewAction } from '@store/actions/reviewAction'
import { ReviewState, REVIEW_TYPE } from '@store/types/reviewTypes'

const initialState: ReviewState = {
  loading: false,
  reviews: {} as ReviewListResponse,
  review: {} as ReviewResponse,
  msg: ''
}

const reviewReducer = (state = initialState, action: ReviewAction) => {
  switch (action.type) {
    case REVIEW_TYPE.REQUEST_START:
      return {
        ...state,
        loading: true
      }
    case REVIEW_TYPE.REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        reviews: action.payload
      }
    case REVIEW_TYPE.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        review: action.payload
      }
    case REVIEW_TYPE.REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    default:
      return state
  }
}

export default reviewReducer
