import React from 'react'
import { ClassesAndChildren } from '../_PropsType'

const SubTemplate = ({ children }: ClassesAndChildren) => {
  return <main className='w-full bg-primary min-h-screen m-0'>{children}</main>
}

export default SubTemplate
