import React from 'react'
import { Controller, useController } from 'react-hook-form'
import { AsyncPaginate, LoadOptions } from 'react-select-async-paginate'
import { IPickerProps } from '@components/common/_PropsType'
import ErrorMessage from './ErrorMessage'

export interface IAsyncSelectorProps extends IPickerProps {
  loadOptions: LoadOptions<any, any, { page: any }>
  defaultAdditional?: { page: number }
  numric?: boolean
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
  value,
  numric,
  loadOptions
}: IAsyncSelectorProps) => {
  const { field } = useController({ control, name })
  return (
    <div className={`${classes} text-[1.6rem]`}>
      <label
        htmlFor={id}
        className={error ? 'text-error-main' : 'text-table-headerFont'}
      >
        {label}
      </label>
      <AsyncPaginate
        additional={defaultAdditional}
        loadOptions={loadOptions}
        value={item?.find((v) => v.value === field.value)}
        onChange={(e) => {
          numric ? field.onChange(Number(e?.value)) : field.onChange(e?.value)
        }}
        defaultInputValue={value}
        classNamePrefix={error ? 'react-select-error' : 'react-select'}
      />
      {error && <ErrorMessage text={errorTxt} />}
    </div>
  )
}

export default AsyncSelector
