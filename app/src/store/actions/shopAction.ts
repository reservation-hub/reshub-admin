//----------------------------------
// redux action お店情報管理関数
//----------------------------------
import { SHOPS_TYPE } from '@store/types/shopTypes'
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
import { TShopForDetails, TShopForList } from '@model/Shop'

// リクエストを始まる
const shopRequestStart = () => {
  return typedAction(SHOPS_TYPE.REQUEST_START)
}

const shopRequestSuccess = (
  data: fetchModelsWithTotalCountResponse<modelResponse<TShopForList>>
) => {
  return typedAction(SHOPS_TYPE.REQUEST_SUCCESS, data)
}

const shopGetSuccess = (data: TShopForDetails) => {
  return typedAction(SHOPS_TYPE.GET_SUCCESS, data)
}

const shopAddSuccess = (data: TShopForDetails) => {
  return typedAction(SHOPS_TYPE.ADD_SUCCESS, data)
}

const shopPatchSuccess = (data: TShopForDetails) => {
  return typedAction(SHOPS_TYPE.EDIT_SUCCESS, data)
}

const shopDeleteSuccess = (msg: string) => {
  return typedAction(SHOPS_TYPE.DELETE_SUCCESS, msg)
}

// リクエストが失敗したらこっち
const shopRequestFailure = (err: string) => {
  return typedAction(SHOPS_TYPE.REQUEST_FAILURE, err)
}

// 全てのお店データを読み込む
export const fetchShopList =
  (
    page: number,
    order: 'asc' | 'desc'
  ): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(shopRequestStart())
    try {
      const res = await apiEndpoint.shops.getShops(page, order)
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
      if (history.location.pathname === '/create_shop') {
        history.push('/dashboard')
      } else {
        history.push({ pathname: '/salon', state: { currentPage: 1 } })
      }
    } catch (e: any) {
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
      if (history.location.pathname === '/create_shop') {
        history.push(`/shops/${res.data.id}`)
      } else {
        history.push(`/salon/${res.data.id}`)
      }
    } catch (e: any) {
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
      if (history.location.pathname === '/create_shop') {
        history.push('/shops', { state: { currentPage: 1 } })
      } else {
        history.push({ pathname: '/salon', state: { currentPage: 1 } })
      }
    } catch (e: any) {
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