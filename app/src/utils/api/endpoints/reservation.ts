//-----------------------------------------------
// reservation
//-----------------------------------------------
import instance from '@utils/api'
import {
  insertReservationQuery,
  updateReservationQuery
} from '@utils/api/request-response-types/ReservationService'

export const getReservations = async () => await instance.get('reservations')

export const getReservation = async (id: number) =>
  await instance.get(`/reservations/${id}`)

export const createReservation = async (resData: insertReservationQuery) =>
  await instance.post('/reservations', { ...resData })

export const patchReservation = async (resData: updateReservationQuery) =>
  await instance.patch(`/reservations/${resData.id}`, { ...resData })

export const deleteReservation = async (id: number) =>
  await instance.delete(`/reservations/${id}`)

const reservation = {
  getReservations,
  getReservation,
  createReservation,
  patchReservation,
  deleteReservation
}

export default reservation
