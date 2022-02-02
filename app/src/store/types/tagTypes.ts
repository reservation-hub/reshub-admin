//----------------------------------
// redux action types tags
//----------------------------------
import {
  TagListResponse,
  TagResponse
} from '@utils/api/request-response-types/Tag'

export const TAG_TYPE = {
  REQUEST_START: 'TAGS_REQUEST_START',
  REQUEST_SUCCESS: 'TAGS_REQUEST_SUCCESS',
  GET_SUCCESS: 'TAGS_GET_SUCCESS',
  ADD_SUCCESS: 'TAGS_ADD_SUCCESS',
  EDIT_SUCCESS: 'TAGS_EDIT_SUCCESS',
  DELETE_SUCCESS: 'TAGS_DELETE_SUCCESS',
  REQUEST_FAILURE: 'TAGS_REQUEST_FAILURE'
} as const

export type TagsState = {
  loading: boolean
  tags: TagListResponse
  tag: TagResponse
  msg: string
}
