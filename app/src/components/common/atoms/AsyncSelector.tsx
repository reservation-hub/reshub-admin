import React from 'react'
import { Controller, useController } from 'react-hook-form'
import { AsyncPaginate, LoadOptions } from 'react-select-async-paginate'
import { IPickerProps } from '@components/common/_PropsType'

export interface IAsyncSelectorProps extends IPickerProps {
  loadOptions: LoadOptions<any, any, { page: any }>
  defaultAdditional?: { page: number }
}

const AsyncSelector = ({
  control,
  name,
  item,
  classes,
  label,
  id,
  error,
  errorTxt,
  defaultAdditional,
  loadOptions
}: IAsyncSelectorProps) => {
  const { field } = useController({ control, name })

  return (
    <div className={`${classes} text-[1.6rem]`}>
      <label htmlFor={id} className='text-table-headerFont'>
        {label}
      </label>
      <AsyncPaginate
        additional={defaultAdditional}
        loadOptions={loadOptions}
        value={item?.find((v) => v.value === field.value)}
        onChange={(e) => {
          field.onChange(e?.value)
        }}
        classNamePrefix='react-select'
      />
      {error && errorTxt}
    </div>
  )
}

export default AsyncSelector
