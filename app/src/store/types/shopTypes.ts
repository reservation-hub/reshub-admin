//----------------------------------
// redux action types お店管理
//----------------------------------
import {
  fetchModelsWithTotalCountResponse,
  modelResponse
} from '@utils/api/request-response-types/ServiceCommonTypes'
import { TShopForDetails, TShopForList } from '@model/Shop'

export const SHOPS_TYPE = {
  REQUEST_START: 'SHOP_REQUEST_START',
  REQUEST_SUCCESS: 'SHOP_REQUEST_SUCCESS',
  GET_SUCCESS: 'SHOP_GET_SUCCESS',
  ADD_SUCCESS: 'SHOP_ADD_SUCCESS',
  EDIT_SUCCESS: 'SHOP_EDIT_SUCCESS',
  DELETE_SUCCESS: 'SHOP_DELETE_SUCCESS',
  REQUEST_FAILURE: 'SHOP_REQUEST_FAILURE'
} as const

export type ShopState = {
  loading: boolean
  shops: fetchModelsWithTotalCountResponse<modelResponse<TShopForList>>
  shop: TShopForDetails
  msg: string
}
