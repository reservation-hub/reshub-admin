import React from 'react'
import { ClassesAndChildren } from '../_PropsType'
import ErrorMessage from './ErrorMessage'

const INPUT_TYPE = {
  TEXT: 'text',
  NUMBER: 'number',
  FILE: 'file',
  PASSWORD: 'password'
} as const

export interface IInputProps extends ClassesAndChildren {
  type?: typeof INPUT_TYPE[keyof typeof INPUT_TYPE]
  value?: string
  id?: string
  autoComplete?: 'on' | 'off'
  placeholder?: string
  required?: boolean
  name?: string
  error?: boolean
  errorTxt?: string
  fullWidth?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

const InputFiled = ({
  classes,
  value,
  type,
  id,
  autoComplete,
  placeholder,
  required,
  name,
  error,
  errorTxt,
  fullWidth,
  onChange,
  onBlur
}: IInputProps) => {
  console.log(error)
  return (
    <div className='my-[2rem]'>
      <input
        type={type}
        id={id}
        value={value}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        className={
          fullWidth
            ? `${classes} mb-2 text-[1.6rem] p-3 w-full focus:border-2 focus:border-primary`
            : `${classes} mb-2 text-[1.6rem] p-3 focus:border-2 focus:border-primary`
        }
      />
      {error && <ErrorMessage text={errorTxt} />}
    </div>
  )
}

export default React.memo(InputFiled)
