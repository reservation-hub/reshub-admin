//----------------------------------
// redux action お店情報管理関数
//----------------------------------
import {
  SHOP_ADD_SUCCESS,
  SHOP_DELETE_SUCCESS,
  SHOP_EDIT_SUCCESS,
  SHOP_GET_SUCCESS,
  SHOP_REQUEST_FAILURE,
  SHOP_REQUEST_START,
  SHOP_REQUEST_SUCCESS
} from '@store/types/shopTypes'
import { RootState, typedAction } from '@store/store'
import {
  insertShopQuery,
  updateShopQuery
} from '@utils/api/request-response-types/ShopService'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import apiEndpoint from '@utils/api/apiEndpoint'
import history from '@utils/routes/history'
import {
  fetchModelsWithTotalCountResponse,
  modelResponse
} from '@utils/api/request-response-types/ServiceCommonTypes'
import { TShop, TShopList } from '@Model/ShopResponse'

// リクエストを始まる
const shopRequestStart = () => {
  return typedAction(SHOP_REQUEST_START)
}

const shopRequestSuccess = (
  data: fetchModelsWithTotalCountResponse<modelResponse<TShopList>>
) => {
  return typedAction(SHOP_REQUEST_SUCCESS, data)
}

const shopGetSuccess = (data: TShop) => {
  return typedAction(SHOP_GET_SUCCESS, data)
}

const shopAddSuccess = (data: TShop) => {
  return typedAction(SHOP_ADD_SUCCESS, data)
}

const shopPatchSuccess = (data: TShop) => {
  return typedAction(SHOP_EDIT_SUCCESS, data)
}

const shopDeleteSuccess = (msg: string) => {
  return typedAction(SHOP_DELETE_SUCCESS, msg)
}

// リクエストが失敗したらこっち
const shopRequestFailure = (err: string) => {
  return typedAction(SHOP_REQUEST_FAILURE, err)
}

// 全てのお店データを読み込む
export const fetchShopList =
  (page: number): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(shopRequestStart())
    try {
      const res = await apiEndpoint.shops.getShops(page)
      dispatch(shopRequestSuccess(res.data))
    } catch (e) {
      history.push('/error')
    }
  }

// お店データを一つだけ読み込む
export const getOneShop =
  (id: number): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(shopRequestStart())
    try {
      const res = await apiEndpoint.shops.getShop(id)
      dispatch(shopGetSuccess(res.data))
    } catch (e) {
      history.push('/error')
    }
  }

// お店データを追加する
export const addShop =
  (shopData: insertShopQuery): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(shopRequestStart())
    try {
      const res = await apiEndpoint.shops.createShop(shopData)
      dispatch(shopAddSuccess(res.data))
      history.push('/salon')
    } catch (e) {
      dispatch(shopRequestFailure(e))
    }
  }

// お店のデータを編集する
export const editShopData =
  (shopData: updateShopQuery): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(shopRequestStart())
    try {
      const res = await apiEndpoint.shops.patchShop(shopData)
      dispatch(shopPatchSuccess(res.data))
      history.push('/salon')
    } catch (e) {
      dispatch(shopRequestFailure(e))
    }
  }

// お店のデータを削除する
export const deleteShopData =
  (id: number): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(shopRequestStart())
    try {
      const res = await apiEndpoint.shops.deleteShop(id)
      dispatch(shopDeleteSuccess(res.data))
    } catch (e) {
      dispatch(shopRequestFailure(e))
    }
  }

export type ShopAction =
  | ReturnType<typeof shopRequestStart>
  | ReturnType<typeof shopRequestSuccess>
  | ReturnType<typeof shopGetSuccess>
  | ReturnType<typeof shopAddSuccess>
  | ReturnType<typeof shopPatchSuccess>
  | ReturnType<typeof shopDeleteSuccess>
  | ReturnType<typeof shopRequestFailure>
