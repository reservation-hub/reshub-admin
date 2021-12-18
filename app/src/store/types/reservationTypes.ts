import { TReservationForDetail, TReservationForList } from '@model/Reservation'

export const RESERVATION_TYPE = {
  REQUEST_START: 'REQUEST_START',
  REQUSET_SUCCESS: 'REQUEST_SUCCESS',
  GET_ONE_SUCCESS: 'GET_ONE_SUCCESS',
  ADD_SUCCESS: 'ADD_SUCCESS',
  PATCH_SUCCESS: 'PATCH_SUCCESS',
  DELETE_SUCCESS: 'DELETE_SUCCESS',
  REQUEST_FAILURE: 'REQUEST_FAILURE'
} as const

export type ReservationState = {
  loading: boolean
  reservations: TReservationForList[]
  reservation: TReservationForDetail
  err: string
  msg: string
}
