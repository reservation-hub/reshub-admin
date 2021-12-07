import React from 'react'
import { IInputProps } from '../_PropsType'
import '@styles/global.css'

export const GENDER_TYPE = [
  { id: '1', value: 'male', label: '男性' },
  { id: '2', value: 'female', label: '女性' },
  { id: '3', value: 'other', label: 'その他' }
]

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
    <div className={classes}>
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
