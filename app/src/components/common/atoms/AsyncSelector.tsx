import React from 'react'
import { Controller, useController } from 'react-hook-form'
import { AsyncPaginate, LoadOptions } from 'react-select-async-paginate'
import { IPickerProps } from '@components/common/_PropsType'
import ErrorMessage from './ErrorMessage'

export interface IAsyncSelectorProps extends IPickerProps {
  loadOptions: LoadOptions<any, any, { page: any }>
  defaultAdditional?: { page: number }
  numric?: boolean
  isMulti?: boolean
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
  isMulti,
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
        value={
          isMulti
            ? item?.find((v) => [v.value] === [field.value])
            : item?.find((v) => v.value === field.value)
        }
        onChange={(e) => {
          if (numric && isMulti) {
            field.onChange(e.map((v: any) => Number(v.value)))
          } else if (numric) {
            field.onChange(Number(e?.value))
          } else if (isMulti) {
            field.onChange(e.map((v: any) => v.value))
          } else {
            field.onChange(e?.value)
          }
        }}
        defaultInputValue={value}
        classNamePrefix={error ? 'react-select-error' : 'react-select'}
        isMulti={isMulti}
      />
      {error && <ErrorMessage text={errorTxt} />}
    </div>
  )
}

export default AsyncSelector
