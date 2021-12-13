//----------------------------------
// redux お店状態管理 reducer
//----------------------------------
import {
  SHOP_ADD_SUCCESS,
  SHOP_DELETE_SUCCESS,
  SHOP_EDIT_SUCCESS,
  SHOP_GET_SUCCESS,
  SHOP_REQUEST_FAILURE,
  SHOP_REQUEST_SUCCESS,
  ShopState,
  SHOP_REQUEST_START
} from '@store/types/shopTypes'
import { ShopAction } from '@store/actions/shopAction'
import {
  fetchModelsWithTotalCountResponse,
  modelResponse
} from '@utils/api/request-response-types/ServiceCommonTypes'
import { Shop } from '@/entities/Shop'

const initialState: ShopState = {
  loading: false,
  shops: {} as fetchModelsWithTotalCountResponse<modelResponse<Shop>>,
  shop: {} as Shop,
  msg: ''
}

const shopReducer = (state = initialState, action: ShopAction) => {
  switch (action.type) {
    case SHOP_REQUEST_START:
      return {
        ...state,
        loading: true
      }
    case SHOP_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        shops: action.payload
      }
    case SHOP_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        shop: action.payload
      }
    case SHOP_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        shop: action.payload
      }
    case SHOP_EDIT_SUCCESS:
      return {
        ...state,
        loading: false,
        shop: action.payload
      }
    case SHOP_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    case SHOP_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        err: action.payload || state
      }
    default:
      return state
  }
}

export default shopReducer
