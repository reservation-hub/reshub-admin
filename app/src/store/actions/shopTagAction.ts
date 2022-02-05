//----------------------------------
// redux ユーザー状態管理 action
//----------------------------------
import { SHOP_TAG_TYPE } from '@store/types/shopTagTypes'
import { RootState, typedAction } from '@store/store'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import apiEndpoint from '@utils/api/apiEndpoint'
import history from '@utils/routes/history'
import {
  TagLinkQuery,
  TagUnlinkQuery,
  TagListResponse
} from '@utils/api/request-response-types/Shop'

const tagRequestStart = () => {
  return typedAction(SHOP_TAG_TYPE.REQUEST_START)
}

const tagRequestSuccess = (data: TagListResponse) => {
  return typedAction(SHOP_TAG_TYPE.REQUEST_SUCCESS, data)
}

const tagAddSuccess = (data: string) => {
  return typedAction(SHOP_TAG_TYPE.ADD_SUCCESS, data)
}

const tagDeleteSuccess = (msg: string) => {
  return typedAction(SHOP_TAG_TYPE.DELETE_SUCCESS, msg)
}

const tagRequestFailure = (err: string) => {
  return typedAction(SHOP_TAG_TYPE.REQUEST_FAILURE, err)
}

export const fetchTagList =
  (
    shopId: number,
    page: number,
    order: 'asc' | 'desc'
  ): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(tagRequestStart())
    try {
      const res = await apiEndpoint.shopTags.getTags(shopId, page, order)
      dispatch(tagRequestSuccess(res.data))
    } catch (e: any) {
      history.push('/error')
    }
  }

export const linkTag =
  (tagData: TagLinkQuery): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(tagRequestStart())
    try {
      const res = await apiEndpoint.shopTags.linkTag(tagData)
      dispatch(tagAddSuccess(res.data))
      history.push({ pathname: '/shop_tags', state: { currentPage: 1 } })
    } catch (e: any) {
      const error = e.response.data
      dispatch(tagRequestFailure(error))
    }
  }

export const unlinkTag =
  (query: TagUnlinkQuery): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(tagRequestStart())
    try {
      const res = await apiEndpoint.shopTags.unlinkTag(query)
      dispatch(tagDeleteSuccess(res.data))
      history.push({ pathname: '/shop_tags', state: { currentPage: 1 } })
    } catch (e: any) {
      const error = e.response.data
      dispatch(tagRequestFailure(error))
    }
  }

export type tagAction =
  | ReturnType<typeof tagRequestStart>
  | ReturnType<typeof tagRequestSuccess>
  | ReturnType<typeof tagAddSuccess>
  | ReturnType<typeof tagDeleteSuccess>
  | ReturnType<typeof tagRequestFailure>
