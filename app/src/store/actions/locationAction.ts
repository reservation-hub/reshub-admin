//----------------------------------
// redux action エリア情報管理
//----------------------------------

import apiEndpoint from '../../utils/api/apiEndpoint'
import history from '../../utils/history'
import { 
  LOCATION_REQUEST_START,
  LOCATION_REQUEST_SUCCESS
} from '../types/locationTypes'

const locationReqStart = () => {
  return {
    type: LOCATION_REQUEST_START
  }
}

const fetchLocation = location => {
  return {
    type: LOCATION_REQUEST_SUCCESS,
    payload: location
  }
}


// エリア情報を読んでくる
export const getArea = () => async dispatch => {
  
  dispatch(locationReqStart())
  try {
    const res = await apiEndpoint.getArea()
    dispatch(fetchLocation(res.data))
  } catch (e) {
    history.push('/error')
  }

}

// 県情報を読んでくる
export const getPrefecture = () => async dispatch => {

  dispatch(locationReqStart())
  try {
    const res = await apiEndpoint.getPrefecture()
    dispatch(fetchLocation(res.data))
  } catch (e) {
    history.push('/error')
  }
  
}

// 市区町村情報を読んでくる
export const getCity = () => async dispatch => {

  dispatch(locationReqStart())
  try {
    const res = await apiEndpoint.getCities()
    dispatch(fetchLocation(res.data))
  } catch (e) {
    history.push('/error')
  }

}