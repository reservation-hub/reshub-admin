import React from 'react'
import { IInputProps } from '@components/common/_PropsType'
import ErrorMessage from './ErrorMessage'
import { useController } from 'react-hook-form'

const INPUT_TYPE = {
  TEXT: 'text',
  NUMBER: 'number',
  FILE: 'file',
  PASSWORD: 'password',
  DATE: 'date'
} as const

export interface IInputFiledProps extends IInputProps {
  type?: typeof INPUT_TYPE[keyof typeof INPUT_TYPE]
}

const InputFiled = ({
  classes,
  error,
  errorTxt,
  fullWidth,
  label,
  control,
  name,
  type,
  id,
  placeholder,
  required,
  autoComplete
}: IInputFiledProps) => {
  const input =
    'w-full text-[1.6rem] p-3 border rounded-[.25rem] focus:border-2 focus:border-primary'

  const { field } = useController({ control, name })
  return (
    <div className={fullWidth ? `${classes} w-full` : classes}>
      <div className='text-[1.6rem]'>
        <label htmlFor={id} className='text-table-headerFont'>
          {label}
        </label>
        <input
          id={id}
          placeholder={placeholder}
          type={type}
          autoComplete={autoComplete || 'off'}
          required={required}
          name={field.name}
          value={field.value}
          onChange={
            type === 'number'
              ? (value) => field.onChange(Number(value))
              : field.onChange
          }
          className={error ? `${input} border-error-main` : input}
        />
      </div>
      {error && <ErrorMessage text={errorTxt} />}
    </div>
  )
}

export default React.memo(InputFiled)
