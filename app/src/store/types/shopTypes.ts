//----------------------------------
// redux action types お店管理
//----------------------------------
import { fetchModelsWithTotalCountResponse, modelResponse } from '@utils/api/request-response-types/ServiceCommonTypes'
import { TShop, TShopList } from '@Model/ShopResponse'

export const SHOP_REQUEST_START = 'SHOP_REQUEST_START' as const
// お店情報のリクエスト成功
export const SHOP_REQUEST_SUCCESS = 'SHOP_REQUEST_SUCCESS' as const

export const SHOP_GET_SUCCESS = 'SHOP_GET_SUCCESS' as const
// お店情報の登録成功の場合
export const SHOP_ADD_SUCCESS = 'SHOP_ADD_SUCCESS' as const
// お店情報の修正成功の場合
export const SHOP_EDIT_SUCCESS = 'SHOP_EDIT_SUCCESS' as const
// お店情報の削除成功の場合
export const SHOP_DELETE_SUCCESS = 'SHOP_DELETE_SUCCESS' as const
// お店情報の取得・登録・修正・削除失敗の場合
export const SHOP_REQUEST_FAILURE = 'SHOP_REQUEST_FAILURE' as const

export type ShopState = {
  loading: boolean
  shops: fetchModelsWithTotalCountResponse<modelResponse<TShopList>>
  shop: TShop
  msg: string
}
