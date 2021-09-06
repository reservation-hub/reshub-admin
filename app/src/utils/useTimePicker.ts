import { ChangeEvent, useCallback, useState } from 'react'
import dayjs from 'dayjs'

export const useTimePicker = (initialState: number) => {
  const [hour, setHour] = useState<number>(initialState)
  const [minute, setMinute] = useState<number>(initialState)
  
  const HH = dayjs().hour(hour).format('HH')
  const mm = dayjs().minute(minute).format('mm')
  const HHmm = dayjs().format(`${ HH }:${ mm }`)
  
  const changeHandler = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const target = e.target as HTMLSelectElement
      
      switch (target.name) {
        case 'hour':
          setHour(Number(target.value))
          break
        case 'minute':
          setMinute(Number(target.value))
          break
      }
      
    }, []
  )
  
  return { hour, minute, changeHandler, HHmm }
  
}
