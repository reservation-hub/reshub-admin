import React from 'react'
import { IPickerProps } from '@components/common/_PropsType'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { useController } from 'react-hook-form'
import ErrorMessage from './ErrorMessage'

export interface ISelectorProps extends IPickerProps {
  defaultValue?: string
}

const Selector = ({
  id,
  label,
  name,
  data,
  classes,
  children,
  control,
  error,
  errorTxt
}: ISelectorProps) => {
  const select =
    'p-3 m-0 min-w-0 block w-full border focus:border-primary rounded-[.25rem] appearance-none text-[1.6rem]'

  const { field } = useController({ control, name })
  return (
    <div className={`${classes} grid`}>
      <label htmlFor={id} className='text-table-headerFont'>
        {label}
      </label>
      <div className='flex'>
        <select id={id} className={error ? `${select} border-error-main` : select} {...field}>
          {children}
          {data?.map((type, index) => (
            <option key={index} value={type.value}>
              {type.name}
            </option>
          ))}
        </select>
        <AiOutlineArrowDown className='self-center ml-[-2.8rem]' />
      </div>
      {error && errorTxt && <ErrorMessage text={errorTxt} />}
    </div>
  )
}

export default Selector
