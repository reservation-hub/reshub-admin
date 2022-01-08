import {
  MenuListResponse,
  MenuResponse
} from '@/utils/api/request-response-types/Shop'
import { MenuState, MENU_TYPE } from '@store/types/menuTypes'
import { MenuAction } from '@store/actions/menuAction'

const initialState: MenuState = {
  loading: false,
  menus: {} as MenuListResponse,
  menu: {} as MenuResponse,
  err: ''
}

const menuReducer = (state = initialState, action: MenuAction) => {
  switch (action.type) {
    case MENU_TYPE.REQUEST_SUCCESS:
      return {
        ...state,
        loading: true
      }
    case MENU_TYPE.REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        menus: action.payload
      }
    case MENU_TYPE.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        menu: action.payload
      }
    case MENU_TYPE.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        err: action.payload
      }
    case MENU_TYPE.EDIT_SUCCESS:
      return {
        ...state,
        loading: false,
        err: action.payload
      }
    case MENU_TYPE.DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        err: action.payload
      }
    case MENU_TYPE.REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        err: action.payload
      }
  }
}

export default menuReducer
