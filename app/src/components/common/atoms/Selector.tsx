import React from 'react'
import { IPickerProps } from '@components/common/_PropsType'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { useController } from 'react-hook-form'
import ErrorMessage from './ErrorMessage'
import Select from 'react-select'

export interface ISelectorProps extends IPickerProps {
  defaultValue?: string
}

const Selector = ({
  id,
  label,
  name,
  data,
  classes,
  control,
  error,
  errorTxt
}: ISelectorProps) => {
  const select =
    'p-3 m-0 min-w-0 block w-full border focus:border-primary rounded-[.25rem] appearance-none text-[1.6rem]'

  const { field } = useController({ control, name })
  return (
    <div className={`${classes} text-[1.6rem]`}>
      <label htmlFor={id} className='text-table-headerFont'>
        {label}
      </label>
      <Select
        id={id}
        options={data}
        name={name}
        value={data?.find((v) => v.value === field.value)}
        onChange={(e) => {
          field.onChange(e?.value)
        }}
        classNamePrefix='react-select'
      />
      {error && errorTxt && <ErrorMessage text={errorTxt} />}
    </div>
  )
}

export default Selector
