import { fetchReservationsForCalendar } from '@store/actions/reservationAction'
import FullCalendar from '@fullcalendar/react'
import { createRef, useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  ReservationForList,
  ReservationStatus
} from '../api/request-response-types/models/Reservation'
import useConvertTime from './useConvertTime'

export type TCalendarEvent = {
  id: string
  shopId: string
  title: string
  date: string
  color: string
}

export const useCalendar = (
  shopId: number,
  reservations: ReservationForList[]
) => {
  const dispatch = useDispatch()
  const [calendar, setCalendar] = useState<boolean>(false)
  const calendarRef = createRef<FullCalendar>()

  const fetchForCalendar = () => {
    return dispatch(
      fetchReservationsForCalendar(
        shopId,
        Number(calendarRef.current?.getApi().getDate().getFullYear()),
        Number(calendarRef.current?.getApi().getDate().getMonth()) + 1
      )
    )
  }

  const convertStatusToColor = (s: ReservationStatus): string => {
    switch (s) {
      case ReservationStatus.CANCELLED:
        return 'red'
      case ReservationStatus.COMPLETED:
        return 'blue'
      default:
        return 'yellow'
    }
  }

  const convertToCalendarEvent = useCallback(
    (item: ReservationForList): TCalendarEvent => {
      return {
        id: String(item.id),
        shopId: String(item.shopId),
        title: `${item.clientName}/${item.menuName}`,
        date: useConvertTime('ymdhm', item.reservationDate),
        color: convertStatusToColor(item.status)
      }
    },
    []
  )

  const viewCalendar = useCallback(() => {
    setCalendar(!calendar)
  }, [calendar])

  const reservationsEvent: TCalendarEvent[] = reservations?.map(
    convertToCalendarEvent
  )

  useEffect(() => {
    if (calendar) {
      fetchForCalendar()
    }
  }, [dispatch, calendar])

  return {
    calendar,
    calendarRef,
    reservationsEvent,
    viewCalendar,
    fetchForCalendar
  }
}
