import React from 'react'
import { IH1Props } from '../_PropsType'

const H1 = ({ color, children, classes }: IH1Props) => {
  return <span className={`${classes} text-[3.2rem]`}>{children}</span>
}

export default H1
