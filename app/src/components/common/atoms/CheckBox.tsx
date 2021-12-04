import React from 'react'
import { IPickerProps } from '../_PropsType'

const CheckBox = ({ inputHandler, data, checkedData }: IPickerProps) => {
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
            onChange={inputHandler}
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
