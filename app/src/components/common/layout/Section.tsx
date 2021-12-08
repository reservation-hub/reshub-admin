import React from 'react'
import { ClassesAndChildren } from '../_PropsType'

const Section = ({ children, classes }: ClassesAndChildren) => {
  return (
    <section className={`${classes} w-[110rem] mx-auto mt-[3rem]`}>
      {children}
    </section>
  )
}

export default Section