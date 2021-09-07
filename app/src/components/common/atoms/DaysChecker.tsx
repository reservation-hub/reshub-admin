import React from 'react'
import { days } from '../_Constants'
import { PickerProps } from '../_PropsType'

const DaysChecker = ({ inputHandler }: PickerProps) => {
  return (
    <div className='display-flex justify-between'>
      { days.map((value, index) => (
        <div key={ index } className='checkbox'>
          <label htmlFor='checkbox' className='font-2'>
            { value.value }
          </label>
          <input
            id='checkbox'
            type='checkbox'
            value={ value.id }
            name={ value.value }
            onChange={ inputHandler }
          />
        </div>
      )) }
    </div>
  )
}

export default DaysChecker
