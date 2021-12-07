import React from 'react'
import { useRange } from '@utils/hooks/useRange'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { IPickerProps } from '../_PropsType'

export interface ITimePickerProps extends IPickerProps {
  hh: number
  mm: number
}

const TimePicker = ({ hh, mm, onChange, classes }: ITimePickerProps) => {
  return (
    <>
      <Select
        value={hh}
        name='hour'
        onChange={onChange}
        className={classes}
        variant='outlined'
      >
        {useRange(0, 23).map((hour, index) => (
          <MenuItem key={index} value={hour}>
            {String(hour).padStart(2, '0')}
          </MenuItem>
        ))}
      </Select>
      <span>:</span>
      <Select
        value={mm}
        name='minute'
        onChange={onChange}
        className={classes}
        variant='outlined'
      >
        {useRange(0, 50, 10).map((minute, index) => (
          <MenuItem key={index} value={minute}>
            {String(minute).padStart(2, '0')}
          </MenuItem>
        ))}
      </Select>
    </>
  )
}

export default TimePicker
