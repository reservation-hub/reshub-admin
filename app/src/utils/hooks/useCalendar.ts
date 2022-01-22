import { fetchReservationsForCalendar } from '@store/actions/reservationAction'
import FullCalendar from '@fullcalendar/react'
import { createRef, useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ReservationForList } from '../api/request-response-types/models/Reservation'

export type TCalendarEvnet = {
  id: string
  shopId: string
  title: string
  date: string
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

  const convertToCalendarEvent = useCallback(
    (item: ReservationForList): TCalendarEvnet => {
      return {
        id: String(item.id),
        shopId: String(item.shopId),
        title: `${item.clientName}/${item.menuName}`,
        date: String(item.reservationDate)
      }
    },
    []
  )

  const viewCalendar = useCallback(() => {
    setCalendar(!calendar)
  }, [calendar])

  const reservationsEvent: TCalendarEvnet[] = reservations.map(
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
