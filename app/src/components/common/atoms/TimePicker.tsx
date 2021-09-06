import React from 'react'
import { useRange } from '../../../utils/useRange'
import { PickerProps } from '../_PropsType'

const TimePicker = ({ hh, mm, selectHandler, classes }: PickerProps) => {
  
  return (
    <>
      <select value={ hh } name='hour' onChange={ selectHandler } className={ classes }>
        { useRange(0, 23).map((hour, index) => (
          <option key={ index } value={ hour }>{ String(hour).padStart(2, '0') }</option>
        )) }
      </select>
      <span>:</span>
      <select value={ mm } name='minute' onChange={ selectHandler } className={ classes }>
        { useRange(0, 50, 10).map((minute, index) => (
          <option key={ index } value={ minute }>{ String(minute).padStart(2, '0') }</option>
        )) }
      </select>
    </>
  )
}

export default TimePicker
