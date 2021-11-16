import {
  fetchModelsWithTotalCountResponse,
  modelResponse
} from '@utils/api/request-response-types/ServiceCommonTypes'
import { Area } from '@entity/Location'
import { RootState, typedAction } from '@store/store'
import {
  GET_AREA_SUCCESS,
  GET_CITY_SUCCESS,
  GET_PREF_SUCCESS
} from '@store/types/LocationTypes'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import apiEndpoint from '@/utils/api/apiEndpoint'
import history from '@utils/routes/history'
import { TCity, TPrefecture } from '@Model/LocationResponse'

const areaReqSuccess = (
  data: fetchModelsWithTotalCountResponse<modelResponse<Area>>
) => {
  return typedAction(GET_AREA_SUCCESS, data)
}

const getOneAreaSuccess = (data: TPrefecture) => {
  return typedAction(GET_PREF_SUCCESS, data)
}

const getOnePrefSuccess = (data: TCity) => {
  return typedAction(GET_CITY_SUCCESS, data)
}

export const getArea =
  (): ThunkAction<void, RootState, null, Action> => async (dispatch) => {
    try {
      const res = await apiEndpoint.location.getAreas()
      dispatch(areaReqSuccess(res.data))
    } catch (e) {
      history.push('/error')
    }
  }

export const getOnePref =
  (id: number): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    try {
      const res = await apiEndpoint.location.getArea(id)
      dispatch(getOneAreaSuccess(res.data))
    } catch (e) {
      history.push('/error')
    }
  }

export const getOneCity =
  (id: number): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    try {
      const res = await apiEndpoint.location.getPrefecture(id)
      dispatch(getOnePrefSuccess(res.data))
    } catch (e) {
      history.push('/error')
    }
  }

export type LocationAction =
  | ReturnType<typeof areaReqSuccess>
  | ReturnType<typeof getOneAreaSuccess>
  | ReturnType<typeof getOnePrefSuccess>
