import React from 'react'
import { IPickerProps } from '@components/common/_PropsType'

export interface ICheckBoxProps extends IPickerProps {
  checkedData?: number[]
}

const CheckBox = ({ onChange, data, checkedData }: ICheckBoxProps) => {
  return (
    <div className='flex justify-between text-[1.6rem]'>
      {data?.map((value, index) => (
        <div key={index} className='w-[7rem] h-[4.4rem]'>
          <input
            id={`check-${value.name}`}
            type='checkbox'
            checked={checkedData?.includes(Number(value.value))}
            value={value.value}
            name={value.name}
            onChange={onChange}
          />
          <label htmlFor={`check-${value.name}`} className='labels'>
            {value.name}
          </label>
        </div>
      ))}
    </div>
  )
}

export default CheckBox
