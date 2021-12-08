import React from 'react'
import { useRange } from '@utils/hooks/useRange'
import { IPickerProps } from '../_PropsType'
import { AiOutlineArrowDown } from 'react-icons/ai'

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
  const select =
    'p-[1rem] m-0 min-w-0 block w-full border focus:border-primary rounded-[.25rem] appearance-none'
  return (
    <div className={`${classes} grid text-[1.6rem]`}>
      {label && (
        <label htmlFor={id} className='text-table-headerFont'>
          {label}
        </label>
      )}
      <div className='flex'>
        <select
          name={name}
          id={id}
          onChange={onChange}
          value={value}
          className={select}
        >
          {useRange(from as number, to as number).map((value, index) => (
            <option key={index} value={value}>
              {String(value)}
            </option>
          ))}
        </select>
        <AiOutlineArrowDown className='self-center ml-[-2.8rem]' />
      </div>
    </div>
  )
}

export default DayPicker
