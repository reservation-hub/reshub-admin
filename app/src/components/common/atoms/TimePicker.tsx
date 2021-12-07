import React from 'react'
import { useRange } from '@utils/hooks/useRange'
import { IPickerProps } from '../_PropsType'

export interface ITimePickerProps extends IPickerProps {
  hh: number
  mm: number
}

const TimePicker = ({ hh, mm, onChange, classes }: ITimePickerProps) => {
  return (
    <>
      <select
        name='hour'
        id='hour'
        className={`${classes} w-full p-3 rounded-[.25rem] border`}
        value={hh}
        onChange={onChange}
      >
        {useRange(0, 23).map((hour, index) => (
          <option key={index} value={hour}>
            {String(hour).padStart(2, '0')}
          </option>
        ))}
      </select>
      <span>:</span>
      <select
        name='hour'
        id='minute'
        className={`${classes} w-full p-3 rounded-[.25rem] border`}
        value={mm}
        onChange={onChange}
      >
        {useRange(0, 50, 10).map((minute, index) => (
          <option key={index} value={minute}>
            {String(minute).padStart(2, '0')}
          </option>
        ))}
      </select>
    </>
  )
}

export default TimePicker
