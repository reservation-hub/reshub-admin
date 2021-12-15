//-----------------------------------------------
// reservation
//-----------------------------------------------
import { TReservationForDetail } from '@/model/Reservation'
import instance from '@utils/api'
import {
  insertReservationQuery,
  updateReservationQuery
} from '@utils/api/request-response-types/ReservationService'
import { AxiosResponse } from 'axios'
import { baseEndpoint } from '@utils/api/apiEndpoint'

export const getReservations = async () => await instance.get('reservations')

export const getReservation = async (
  shopId: number
): Promise<AxiosResponse<TReservationForDetail>> =>
  await instance.get<TReservationForDetail>(
    `${baseEndpoint.shops}/${shopId}/reservation`
  )

export const createReservation = async (
  resData: insertReservationQuery
): Promise<AxiosResponse<TReservationForDetail>> =>
  await instance.post<TReservationForDetail>(
    `${baseEndpoint.shops}/${resData.shopId}/reservation`,
    {
      ...resData
    }
  )

export const patchReservation = async (
  resData: updateReservationQuery
): Promise<AxiosResponse<TReservationForDetail>> =>
  await instance.patch<TReservationForDetail>(
    `${baseEndpoint.shops}/${resData.params.shopId}/reservation/${resData.id}`,
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
