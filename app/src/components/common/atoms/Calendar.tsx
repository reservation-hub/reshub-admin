import React, { useCallback } from 'react'
import FullCalendar, { EventClickArg } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import allLocales from '@fullcalendar/core/locales-all'
import interactionPlugin from '@fullcalendar/interaction'
import history from '@/utils/routes/history'

export interface ICalnederProps {
  events?: { id: string; shopId: string; title: string; date: string }[]
}

const Calendar = ({ events }: ICalnederProps) => {
  const calendarClickHandler = useCallback(
    (arg: EventClickArg) => {
      history.push(`/reservation/${arg.event?.id}`, {
        state: { shopId: arg.event.extendedProps?.shopId }
      })
    },
    [history]
  )

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      locales={allLocales}
      initialView='dayGridMonth'
      locale='ja'
      events={events}
      eventClick={calendarClickHandler}
    />
  )
}

export default Calendar
