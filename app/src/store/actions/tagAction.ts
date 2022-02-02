//----------------------------------
// redux ユーザー状態管理 action
//----------------------------------
import { TAG_TYPE } from '@store/types/tagTypes'
import { RootState, typedAction } from '@store/store'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import apiEndpoint from '@utils/api/apiEndpoint'
import history from '@utils/routes/history'
import {
  InsertTagQuery,
  UpdateTagQuery,
  TagResponse,
  TagListResponse
} from '@utils/api/request-response-types/Tag'

const tagRequestStart = () => {
  return typedAction(TAG_TYPE.REQUEST_START)
}

const tagRequestSuccess = (data: TagListResponse) => {
  return typedAction(TAG_TYPE.REQUEST_SUCCESS, data)
}

const tagGetSuccess = (data: TagResponse) => {
  return typedAction(TAG_TYPE.GET_SUCCESS, data)
}

const tagAddSuccess = (data: string) => {
  return typedAction(TAG_TYPE.ADD_SUCCESS, data)
}

const tagPatchSuccess = (data: string) => {
  return typedAction(TAG_TYPE.EDIT_SUCCESS, data)
}

const tagDeleteSuccess = (msg: string) => {
  return typedAction(TAG_TYPE.DELETE_SUCCESS, msg)
}

const tagRequestFailure = (err: string) => {
  return typedAction(TAG_TYPE.REQUEST_FAILURE, err)
}

export const fetchTagList =
  (
    page: number,
    order: 'asc' | 'desc'
  ): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(tagRequestStart())
    try {
      const res = await apiEndpoint.tags.getTags(page, order)
      dispatch(tagRequestSuccess(res.data))
    } catch (e: any) {
      history.push('/error')
    }
  }

export const getOneTag =
  (id: number): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(tagRequestStart())
    try {
      const res = await apiEndpoint.tags.getTag(id)
      dispatch(tagGetSuccess(res.data))
    } catch (e: any) {
      history.push('/error')
    }
  }

export const addTag =
  (tagData: InsertTagQuery): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(tagRequestStart())
    try {
      const res = await apiEndpoint.tags.createTag(tagData)
      dispatch(tagAddSuccess(res.data))
      history.push({ pathname: '/tags', state: { currentPage: 1 } })
    } catch (e: any) {
      const error = e.response.data
      dispatch(tagRequestFailure(error))
    }
  }

export const patchTag =
  (tagData: UpdateTagQuery): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(tagRequestStart())
    try {
      const res = await apiEndpoint.tags.patchTag(tagData)
      dispatch(tagPatchSuccess(res.data))
      history.push(`/tags/${tagData.id}`)
    } catch (e: any) {
      const error = e.response.data
      dispatch(tagRequestFailure(error))
    }
  }

export const deleteTag =
  (id: number): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(tagRequestStart())
    try {
      const res = await apiEndpoint.tags.deleteTag(id)
      dispatch(tagDeleteSuccess(res.data))
      history.push({ pathname: '/tags', state: { currentPage: 1 } })
    } catch (e: any) {
      const error = e.response.data
      dispatch(tagRequestFailure(error))
    }
  }

export type tagAction =
  | ReturnType<typeof tagRequestStart>
  | ReturnType<typeof tagRequestSuccess>
  | ReturnType<typeof tagGetSuccess>
  | ReturnType<typeof tagAddSuccess>
  | ReturnType<typeof tagPatchSuccess>
  | ReturnType<typeof tagDeleteSuccess>
  | ReturnType<typeof tagRequestFailure>
