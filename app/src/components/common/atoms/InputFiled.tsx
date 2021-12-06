import React from 'react'
import { ClassesAndChildren } from '../_PropsType'

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
  onChange
}: IInputProps) => {
  return (
    <>
      <input
        type={type}
        id={id}
        value={value}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
        name={name}
        onChange={onChange}
        className={
          fullWidth ?
            `${classes} text-[1.6rem] p-3 w-full focus:border-2 focus:border-primary` :
          error ?
            `${classes} text-[1.6rem] border-error-main p-3 focus:border-2 focus:border-primary` 
            : `${classes} text-[1.6rem] p-3 focus:border-2 focus:border-primary`
        }
      />
      {error && <span>{errorTxt}</span>}
    </>
  )
}

export default InputFiled
