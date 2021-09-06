import {
  fetchModelsWithTotalCountResponse,
  modelResponse
} from '../../utils/api/request-response-types/ServiceCommonTypes'
import { Area } from '../../entities/Location'
import { RootState, typedAction } from '../store'
import { GET_AREAS_SUCCESS, GET_ONE_AREA, GET_PREF_SUCCESS } from '../types/LocationTypes'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import apiEndpoint from '../../utils/api/apiEndpoint'
import history from '../../utils/history'
import { AreaResponse, PrefResponse } from '../../Model/LocationResponse'

const areaReqSuccess = (data: fetchModelsWithTotalCountResponse<modelResponse<Area>>) => {
  return typedAction(GET_AREAS_SUCCESS, data)
}

const getOneAreaSuccess = (data: AreaResponse) => {
  return typedAction(GET_ONE_AREA, data)
}

const getOnePrefSuccess = (data: PrefResponse) => {
  return typedAction(GET_PREF_SUCCESS, data)
}

export const getArea = ():
  ThunkAction<void, RootState, null, Action> => async dispatch => {
  
  try {
    const res = await apiEndpoint.getArea()
    dispatch(areaReqSuccess(res.data))
  } catch (e) {
    history.push('/error')
  }
  
}

export const getOneArea = (id: number):
  ThunkAction<void, RootState, null, Action> => async dispatch => {
  
  try {
    const res = await apiEndpoint.getOneArea(id)
    dispatch(getOneAreaSuccess(res.data))
  } catch (e) {
    history.push('/error')
  }
}

export const getOnePref = (id: number):
  ThunkAction<void, RootState, null, Action> => async dispatch => {
  
  try {
    const res = await apiEndpoint.getOnePref(id)
    dispatch(getOnePrefSuccess(res.data))
  } catch (e) {
    history.push('/error')
  }
  
}


export type LocationAction =
  | ReturnType<typeof areaReqSuccess>
  | ReturnType<typeof getOneAreaSuccess>
  | ReturnType<typeof getOnePrefSuccess>