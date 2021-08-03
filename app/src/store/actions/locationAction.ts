//----------------------------------
// redux action エリア情報管理
//----------------------------------

import { 
  LOCATION_REQUEST_START,
  LOCATION_REQUEST_SUCCESS
} from '../types/locationTypes'

import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../store'
import { LocationData } from "../../interface/interface"

import apiEndpoint from '../../utils/api/apiEndpoint'
import history from '../../utils/history'


const locationReqStart = () => {
  return {
    type: LOCATION_REQUEST_START
  }
}

const fetchLocation = (location: LocationData) => {
  return {
    type: LOCATION_REQUEST_SUCCESS,
    payload: location
  }
}


// エリア情報を読んでくる
export const getArea = (): 
  ThunkAction<void, RootState, null, Action> => async dispatch => {
  
  dispatch(locationReqStart())
  try {
    const res = await apiEndpoint.getArea()
    dispatch(fetchLocation(res.data))
  } catch (e) {
    history.push('/error')
  }

}

// 県情報を読んでくる
export const getPrefecture = ():
  ThunkAction<void, RootState, null, Action> => async dispatch => {

    dispatch(locationReqStart())
    try {
      const res = await apiEndpoint.getPrefecture()
      dispatch(fetchLocation(res.data))
    } catch (e) {
      history.push('/error')
    }
  
}

// 市区町村情報を読んでくる
export const getCity = ():
  ThunkAction<void, RootState, null, Action> => async dispatch => {

    dispatch(locationReqStart())
    try {
      const res = await apiEndpoint.getCities()
      dispatch(fetchLocation(res.data))
    } catch (e) {
      history.push('/error')
    }

}

export type LocationAction =
  | ReturnType<typeof locationReqStart>
  | ReturnType<typeof fetchLocation>