import React, { RefObject, useCallback } from 'react'
import FullCalendar, { EventClickArg } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import allLocales from '@fullcalendar/core/locales-all'
import interactionPlugin from '@fullcalendar/interaction'
import history from '@utils/routes/history'

export interface ICalendarProps {
  events: { id: string; shopId: string; title: string; date: string, color: string }[]
  customButtons?: { prev: Record<string, any>; next: Record<string, any> }
  calendarRef?: RefObject<FullCalendar>
}

const Calendar = ({ events, customButtons, calendarRef }: ICalendarProps) => {
  const calendarClickHandler = useCallback(
    (arg: EventClickArg) => {
      history.push(`/reservation/detail/${arg.event?.id}`, {
        shopId: arg.event.extendedProps?.shopId
      })
    },
    [history]
  )

  return (
    <FullCalendar
      ref={calendarRef}
      plugins={[dayGridPlugin, interactionPlugin]}
      locales={allLocales}
      initialView='dayGridMonth'
      locale='ja'
      events={events}
      eventClick={calendarClickHandler}
      customButtons={customButtons}
      headerToolbar={{
        left: '',
        center: 'title',
        right: 'today prev,next'
      }}
      buttonText={{
        today: '今月',
        prev: '先月',
        next: '来月'
      }}
      eventClassNames='bg-primary text-white text-[1.4rem] hover:bg-primary'
      viewClassNames='bg-white text-[1.6rem]'
      height='60rem'
      nowIndicator
    />
  )
}

export default Calendar
