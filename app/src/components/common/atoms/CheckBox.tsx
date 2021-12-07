import React from 'react'
import { IPickerProps } from '../_PropsType'

export interface ICheckBoxProps extends IPickerProps {
  checkedData?: number[]
}

const CheckBox = ({ onChange, data, checkedData }: ICheckBoxProps) => {
  return (
    <div className='flex justify-between'>
      {data?.map((value, index) => (
        <div key={index} className='w-[7rem] h-[4.4rem]'>
          <input
            id={`check-${value.id}`}
            type='checkbox'
            checked={checkedData?.includes(value.id)}
            value={value.id}
            name={value.name}
            onChange={onChange}
          />
          <label htmlFor={`check-${value.id}`} className='labels'>
            {value.name}
          </label>
        </div>
      ))}
    </div>
  )
}

export default CheckBox
