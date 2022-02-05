//----------------------------------
// redux action types tags
//----------------------------------
import { TagListResponse } from '@utils/api/request-response-types/Shop'

export const SHOP_TAG_TYPE = {
  REQUEST_START: 'SHOP_TAGS_REQUEST_START',
  REQUEST_SUCCESS: 'SHOP_TAGS_REQUEST_SUCCESS',
  GET_SUCCESS: 'SHOP_TAGS_GET_SUCCESS',
  ADD_SUCCESS: 'SHOP_TAGS_ADD_SUCCESS',
  EDIT_SUCCESS: 'SHOP_TAGS_EDIT_SUCCESS',
  DELETE_SUCCESS: 'SHOP_TAGS_DELETE_SUCCESS',
  REQUEST_FAILURE: 'SHOP_TAGS_REQUEST_FAILURE'
} as const

export type ShopTagsState = {
  loading: boolean
  tags: TagListResponse
  msg: string
}
