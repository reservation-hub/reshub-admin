import React from 'react'
import { IPickerProps } from '@components/common/_PropsType'
import { AiOutlineArrowDown } from 'react-icons/ai'

export interface ISelectorProps extends IPickerProps {
  defaultValue?: string
}

const Selector = ({
  id,
  label,
  name,
  value,
  onChange,
  data,
  classes,
  children
}: ISelectorProps) => {
  const select =
    'p-3 m-0 min-w-0 block w-full border focus:border-primary rounded-[.25rem] appearance-none text-[1.6rem]'
  return (
    <div className={`${classes} grid`}>
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
          {children}
          {data?.map((type, index) => (
            <option key={index} value={type.value}>
              {type.name}
            </option>
          ))}
        </select>
        <AiOutlineArrowDown className='self-center ml-[-2.8rem]' />
      </div>
    </div>
  )
}

export default Selector
