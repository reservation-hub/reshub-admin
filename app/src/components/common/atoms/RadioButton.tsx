import React from 'react'
import { IInputProps } from '@components/common/_PropsType'
import '@styles/global.css'

export interface IRadioButtonProps extends IInputProps {
  data: Record<string, any>
}

const RadioButton = ({
  data,
  name,
  label,
  classes,
  onChange
}: IRadioButtonProps) => {
  return (
    <div className={`${classes} text-[1.6rem]`}>
      <span className='text-[1.6rem] text-table-headerFont'>{label}</span>
      <div className='flex justify-between'>
        {Object.values(data).map((d, index) => (
          <React.Fragment key={index}>
            <input
              type='radio'
              value={d.value}
              id={d.id}
              name={name}
              onChange={onChange}
            />
            <label
              key={index}
              htmlFor={d.id}
              className='labels text-table-headerFont'
            >
              {d.label}
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default RadioButton
