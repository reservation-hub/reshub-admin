import {
  StylistListResponse,
  StylistResponse
} from '@utils/api/request-response-types/Shop'
import { StylistAction } from '@store/actions/stylistAction'
import { StylistState, STYLIST_TPYE } from '@store/types/stylistTypes'

const initialState: StylistState = {
  loading: false,
  stylists: {} as StylistListResponse,
  stylist: {} as StylistResponse,
  msg: ''
}

const stylistReducer = (state = initialState, action: StylistAction) => {
  switch (action.type) {
    case STYLIST_TPYE.REQUEST_START:
      return {
        ...state,
        loading: true
      }
    case STYLIST_TPYE.REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        stylists: action.payload
      }
    case STYLIST_TPYE.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        stylist: action.payload
      }
    case STYLIST_TPYE.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    case STYLIST_TPYE.EDIT_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    case STYLIST_TPYE.DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    case STYLIST_TPYE.REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    default:
      return state
  }
}

export default stylistReducer
