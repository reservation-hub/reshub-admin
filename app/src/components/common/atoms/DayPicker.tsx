import React from 'react'
import { useRange } from '@utils/hooks/useRange'
import { IPickerProps } from '../_PropsType'

export interface IDaySelectProps extends IPickerProps {
  from: number
  to: number
}

const DayPicker = ({
  value,
  name,
  classes,
  from,
  to,
  label,
  id,
  onChange
}: IDaySelectProps) => {
  return (
    <div className={`${classes} grid`}>
      {label && (
        <label htmlFor={id} className='text-table-headerFont'>
          {label}
        </label>
      )}
      <select
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        className='border p-[1rem]'
      >
        {useRange(from as number, to as number).map((value, index) => (
          <option key={index} value={value}>
            {String(value)}
          </option>
        ))}
      </select>
    </div>
  )
}

export default DayPicker
