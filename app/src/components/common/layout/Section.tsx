import React from 'react'
import { ClassesAndChildren } from '@components/common/_PropsType'

const Section = ({ children, classes }: ClassesAndChildren) => {
  return (
    <section className={`${classes} w-[118rem] mx-auto mt-[3rem]`}>
      {children}
    </section>
  )
}

export default Section
