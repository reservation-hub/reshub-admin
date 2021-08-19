//----------------------------------
// redux action お店情報管理関数
//----------------------------------

import {
  SHOP_FETCH_SUCCESS,
  SHOP_GET_SUCCESS,
  SHOP_ADD_SUCCESS,
  SHOP_DELETE_SUCCESS,
  SHOP_EDIT_SUCCESS,
  SHOP_REQUEST_FAILURE,
  SHOP_REQUEST_START
} from '../types/shopTypes'

import apiEndpoint from '../../utils/api/apiEndpoint'
import { RootState, typedAction } from '../store'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { insertShopQuery, updateShopQuery } from '../../utils/api/request-response-types/ShopService'

// リクエストを始まる
const shopRequestStart = () => {
  return typedAction(SHOP_REQUEST_START)
}

//　リクエストが失敗したらこっち
const shopRequestFailure = (err: string) => {
  return typedAction(SHOP_REQUEST_FAILURE, err)
}

//　全てのお店データを読み込む
export const fetchShopList = ():
  ThunkAction<void, RootState, null, Action> => async dispatch => {
  
  dispatch(shopRequestStart())
  try {
    const res = await apiEndpoint.getShop()
    dispatch(typedAction(SHOP_FETCH_SUCCESS, res.data))
  } catch (e) {
    dispatch(shopRequestFailure(e))
  }
  
}

//　お店データを一つだけ読み込む
export const getOneShop = (id: number):
  ThunkAction<void, RootState, null, Action> => async dispatch => {
  
  dispatch(shopRequestStart())
  try {
    const res = await apiEndpoint.getOneShop(id)
    dispatch(typedAction(SHOP_GET_SUCCESS, res.data))
  } catch (e) {
    dispatch(shopRequestFailure(e))
  }
  
}

//　お店データを追加する
export const addShop = (shopData: insertShopQuery):
  ThunkAction<void, RootState, null, Action> => async dispatch => {
  
  dispatch(shopRequestStart())
  try {
    const res = await apiEndpoint.addShop(shopData)
    dispatch(typedAction(SHOP_ADD_SUCCESS, res.data))
  } catch (e) {
    dispatch(shopRequestFailure(e))
  }
  
}

//　お店のデータを編集する
export const editShopData = (shopData: updateShopQuery):
  ThunkAction<void, RootState, null, Action> => async dispatch => {
  
  dispatch(shopRequestStart())
  try {
    const res = await apiEndpoint.patchShop(shopData)
    dispatch(typedAction(SHOP_EDIT_SUCCESS, res.data))
  } catch (e) {
    dispatch(shopRequestFailure(e))
  }
  
}

//　お店のデータを削除する
export const deleteShopData = (id: number):
  ThunkAction<void, RootState, null, Action> => async dispatch => {
  
  dispatch(shopRequestStart())
  try {
    const res = await apiEndpoint.deleteShop(id)
    dispatch(typedAction(SHOP_DELETE_SUCCESS, res.data))
  } catch (e) {
    dispatch(shopRequestFailure(e))
  }
  
}