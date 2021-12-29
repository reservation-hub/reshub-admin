import React, { createRef, Dispatch, SetStateAction, useCallback } from 'react'
import FullCalendar, { CalendarApi, EventClickArg } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import allLocales from '@fullcalendar/core/locales-all'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'
import history from '@/utils/routes/history'
import dayjs from 'dayjs'

export interface ICalnederProps {
  events?: { id: string; shopId: string; title: string; date: string }[]
}

const Calendar = ({ events }: ICalnederProps) => {
  const calendarRef = createRef<FullCalendar>()

  const calendarClickHandler = useCallback(
    (arg: EventClickArg) => {
      // history.push(`/reservation/${arg.event?.id}`, {
      //   state: { shopId: arg.event.extendedProps?.shopId }
      // })
    },
    [history]
  )

  const customButtons: {prev: Record<string, any>, next: Record<string, any>} = {
    prev: {
      text: '先月',
      click: () => {
        calendarRef.current?.getApi().prev()
      }
    },
    next: {
      text: '来月', 
      click: () => {
        calendarRef.current?.getApi().next()
      }
    }
  }

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
        right: 'today,prev,next'
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
