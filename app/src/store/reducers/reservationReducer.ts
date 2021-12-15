import { ReservationAction } from '@store/actions/reservationAction'
import { ReservationState, RESERVATION_TYPE } from '@store/types/reservationTypes'

const initialState: ReservationState = {
  loading: false,
  reservations: {},
  reservation: {},
  err: ''
}

const reservationReducer = (
  state = initialState,
  action: ReservationAction
) => {
  switch (action.type) {
    case RESERVATION_TYPE.REQUEST_START:
      return {
        ...state,
        loading: true
      }
    case RESERVATION_TYPE.REQUSET_SUCCESS:
      return {
        ...state,
        loading: false,
        reservations: action.payload
      }
    case RESERVATION_TYPE.GET_ONE_SUCCESS:
      return {
        ...state,
        loading: false,
        reservation: action.payload
      }
    case RESERVATION_TYPE.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        reservation: action.payload
      }
    case RESERVATION_TYPE.PATCH_SUCCESS:
      return {
        ...state,
        loading: false,
        reservation: action.payload
      }
    case RESERVATION_TYPE.DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        reservation: action.payload
      }
    case RESERVATION_TYPE.REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        err: action.payload
      }
    default:
      return state
  }
}

export default reservationReducer
