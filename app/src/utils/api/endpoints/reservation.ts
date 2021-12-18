//-----------------------------------------------
// reservation
//-----------------------------------------------
import instance from '@utils/api'
import { AxiosResponse } from 'axios'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import {
  InsertShopReservationQuery,
  ReservationListResponse,
  UpdateShopReservationQuery
} from '@utils/api/request-response-types/Shop'

export const getReservations = async () => await instance.get('reservations')

export const getReservation = async (
  shopId: number
): Promise<AxiosResponse<ReservationListResponse>> =>
  await instance.get<ReservationListResponse>(
    `${baseEndpoint.shops}/${shopId}/reservation`
  )

export const createReservation = async (
  resData: InsertShopReservationQuery
): Promise<AxiosResponse<string>> =>
  await instance.post<string>(
    `${baseEndpoint.shops}/${resData.shopId}/reservation`,
    {
      ...resData
    }
  )

export const patchReservation = async (
  resData: UpdateShopReservationQuery
): Promise<AxiosResponse<string>> =>
  await instance.patch<string>(
    `${baseEndpoint.shops}/${resData.shopId}/reservation/${resData.reservationId}`,
    { ...resData }
  )

export const deleteReservation = async (
  shopId: number,
  id: number
): Promise<AxiosResponse<string>> =>
  await instance.delete<string>(
    `${baseEndpoint.shops}/${shopId}/reservation/${id}`
  )

const reservation = {
  getReservations,
  getReservation,
  createReservation,
  patchReservation,
  deleteReservation
}

export default reservation
