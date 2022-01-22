import React from 'react'
import { IPickerProps } from '@components/common/_PropsType'
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
  item,
  classes,
  control,
  error,
  value,
  errorTxt
}: ISelectorProps) => {
  const { field } = useController({ control, name })

  return (
    <div className={`${classes} text-[1.6rem]`}>
      <label htmlFor={id} className='text-table-headerFont'>
        {label}
      </label>
      <Select
        id={id}
        options={item}
        name={name}
        defaultValue={item?.find((v) => v.value === value)}
        value={item?.find((v) => v.value === field.value)}
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
