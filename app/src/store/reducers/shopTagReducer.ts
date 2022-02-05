//----------------------------------
// redux ユーザー状態管理 reducer
//----------------------------------
import { ShopTagsState, SHOP_TAG_TYPE } from '@store/types/shopTagTypes'
import { tagAction } from '@store/actions/shopTagAction'
import { TagListResponse } from '@utils/api/request-response-types/Shop'

const initialState: ShopTagsState = {
  loading: false,
  tags: {} as TagListResponse,
  msg: ''
}

const tagReducer = (state = initialState, action: tagAction) => {
  switch (action.type) {
    case SHOP_TAG_TYPE.REQUEST_START:
      return {
        ...state,
        loading: true
      }
    case SHOP_TAG_TYPE.REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        tags: action.payload
      }
    case SHOP_TAG_TYPE.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    case SHOP_TAG_TYPE.DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    case SHOP_TAG_TYPE.REQUEST_FAILURE:
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
