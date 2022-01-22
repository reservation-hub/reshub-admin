import React from 'react'
import { TextProps } from '@components/common/_PropsType'

const H1 = ({ classes, text, children }: TextProps) => {
  return <span className={`${classes} text-[3.2rem]`}>{text || children}</span>
}

export default H1
