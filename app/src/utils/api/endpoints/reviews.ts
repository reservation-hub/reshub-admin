//-----------------------------------------------
// reviews
//-----------------------------------------------
import instance from '@utils/api'
import { AxiosResponse } from 'axios'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import {
  ReviewListResponse,
  ReviewResponse
} from '@utils/api/request-response-types/Shop'

export const fetchAll = async (
  shopId: number,
  page: number,
  order: 'asc' | 'desc'
): Promise<AxiosResponse<ReviewListResponse>> => {
  return await instance.get<ReviewListResponse>(
    `${baseEndpoint.shops}/${shopId}/reviews?page=${page}&order=${order}`
  )
}

export const getReview = async (
  shopId: number,
  reviewId: number
): Promise<AxiosResponse<ReviewResponse>> => {
  return await instance.get<ReviewResponse>(
    `${baseEndpoint.shops}/${shopId}/reviews/${reviewId}`
  )
}

const review = {
  fetchAll,
  getReview
}

export default review
