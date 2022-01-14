import React from 'react'
import { useController } from 'react-hook-form'
import { IInputProps } from '@components/common/_PropsType'
import ErrorMessage from './ErrorMessage'

export interface ITextAreaProps extends IInputProps {
  fullWidth?: boolean
}

const TextArea = ({
  classes,
  error,
  errorTxt,
  fullWidth,
  label,
  control,
  name,
  id,
  autoComplete
}: ITextAreaProps) => {
  const textArea = 'w-full p-3 h-[10rem] border resize-none'
  const { field } = useController({ control, name })
  return (
    <div className={fullWidth ? `${classes} w-full` : classes}>
      <div className='text-[1.6rem]'>
        <label htmlFor={id} className='text-table-headerFont'>
          {label}
        </label>
        <textarea
          id={id}
          autoComplete={autoComplete || 'off'}
          {...field}
          className={error ? `${textArea} border-error-main` : textArea}
        />
      </div>
      {error && <ErrorMessage text={errorTxt} />}
    </div>
  )
}

export default TextArea
