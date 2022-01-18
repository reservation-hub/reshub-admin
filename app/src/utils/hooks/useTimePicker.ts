import { ChangeEvent, useCallback, useState } from 'react'
import dayjs from '@utils/hooks/useDayJs'
import { TIME_PICKER_TIME_TYPE } from '@constants/Time'

export const useTimePicker = (initialState: string) => {
  const [hour, setHour] = useState<string>(initialState)
  const [minute, setMinute] = useState<string>(initialState)

  const HH = dayjs().tz('Asia/Tokyo').hour(Number(hour)).format('HH')
  const mm = dayjs().tz('Asia/Tokyo').minute(Number(minute)).format('mm')
  const HHmm = dayjs().tz('Asia/Tokyo').format(`${HH}:${mm}`)

  const changeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLSelectElement

    switch (target.name) {
      case TIME_PICKER_TIME_TYPE.HOUR:
        setHour(target.value)
        break
      case TIME_PICKER_TIME_TYPE.MINUTE:
        setMinute(target.value)
        break
    }
  }, [])

  return { hour, minute, changeHandler, HHmm }
}
