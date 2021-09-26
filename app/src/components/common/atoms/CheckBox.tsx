import React from 'react'
import { IPickerProps } from '../_PropsType'

const CheckBox = ({ inputHandler, data, checkedData }: IPickerProps) => {
  return (
    <div className='display-flex justify-between'>
      {data?.days?.map((value, index) => (
        <div key={index} className={`checkbox-${index}`}>
          <label htmlFor={`check-${value.id}`} className='font-2'>
            {value.value}
          </label>
          <input
            id={`check-${value.id}`}
            type='checkbox'
            checked={checkedData?.includes(value.id)}
            value={value.id}
            name={value.value}
            onChange={inputHandler}
          />
        </div>
      ))}
    </div>
  )
}

export default CheckBox
