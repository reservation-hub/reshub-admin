import React from 'react'
import { ClassesAndChildren } from '../_PropsType'

const CenterBox = ({ children }: ClassesAndChildren) => {
  return <div className='right-1/4 top-1/4 left-1/4 absolute'>{children}</div>
}

export default CenterBox
