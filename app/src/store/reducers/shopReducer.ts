//----------------------------------
// redux お店状態管理 reducer
//----------------------------------

import {
  SHOP_ADD_SUCCESS,
  SHOP_DELETE_SUCCESS,
  SHOP_EDIT_SUCCESS,
  SHOP_REQUEST_FAILURE,
  SHOP_REQUEST_SUCCESS, ShopState
} from '../types/shopTypes'
import { Shop } from '../../entities/Shop'
import { ShopAction } from '../actions/shopAction'


const initialState: ShopState = {
  loading: true,
  shops: {} as Shop[],
  shop: [] as Shop[]
}

const shopReducer = (state = initialState, action: ShopAction) => {
  switch (action.type) {
    case SHOP_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        shops: action.payload
      }
    case SHOP_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        shops: [action.payload]
      }
    case SHOP_EDIT_SUCCESS:
      return {
        ...state,
        loading: false,
        shops: [action.payload]
      }
    case SHOP_DELETE_SUCCESS:
      return {
        ...state,
        shops: action.payload
      }
    case SHOP_REQUEST_FAILURE:
      return action.payload || state
    default:
      return state
  }
}

export default shopReducer
