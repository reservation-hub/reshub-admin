//----------------------------------
// redux ユーザー状態管理 reducer
//----------------------------------
import { TagsState, TAG_TYPE } from '@store/types/tagTypes'
import { tagAction } from '@store/actions/tagAction'
import { TagListResponse, TagResponse } from '@utils/api/request-response-types/Tag'

const initialState: TagsState = {
  loading: false,
  tags: {} as TagListResponse,
  tag: {} as TagResponse,
  msg: ''
}

const tagReducer = (state = initialState, action: tagAction) => {
  switch (action.type) {
    case TAG_TYPE.REQUEST_START:
      return {
        ...state,
        loading: true
      }
    case TAG_TYPE.REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        tags: action.payload
      }
    case TAG_TYPE.GET_SUCCESS: {
      return {
        ...state,
        loading: false,
        tag: action.payload
      }
    }
    case TAG_TYPE.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    case TAG_TYPE.EDIT_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    case TAG_TYPE.DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    case TAG_TYPE.REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        err: action.payload || state
      }
    default:
      return state
  }
}

export default tagReducer
