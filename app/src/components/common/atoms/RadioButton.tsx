import React from 'react'
import { IInputProps } from '@components/common/_PropsType'
import '@styles/global.css'
import { useController } from 'react-hook-form'

export interface IRadioButtonProps extends IInputProps {
  data: Record<string, any>
}

const RadioButton = ({
  data,
  name,
  label,
  classes,
  control
}: IRadioButtonProps) => {
  const { field } = useController({ control, name })
  return (
    <div className={`${classes} text-[1.6rem]`}>
      <span className='text-[1.6rem] text-table-headerFont'>{label}</span>
      <div className='flex justify-between'>
        {Object.values(data).map((item, index) => (
          <React.Fragment key={index}>
            <input
              type='radio'
              id={item.id}
              name={field.name}
              onChange={field.onChange}
              value={item.value}
            />
            <label
              key={index}
              htmlFor={item.id}
              className='labels text-table-headerFont'
            >
              {item.label}
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default RadioButton
