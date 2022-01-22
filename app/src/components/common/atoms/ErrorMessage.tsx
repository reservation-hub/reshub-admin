import React from 'react'
import { TextProps } from '@components/common/_PropsType'

const ErrorMessage = ({ children, text, classes }: TextProps) => {
  return (
    <span className={`${classes} text-error-main text-[1.4rem] mb-5`}>
      {text ? text : children}
    </span>
  )
}

export default ErrorMessage
