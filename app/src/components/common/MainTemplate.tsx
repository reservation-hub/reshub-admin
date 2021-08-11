import React from 'react'

import { MainTemplateProps } from './_PropsType'

import CommonStyle from '../CommonStyle'

const MainTemplate = ({ children }: MainTemplateProps) => {

  const classes = CommonStyle()

  return (
    <main className={ classes.mainBackground }>
      { children }
    </main>
  )

}

export default MainTemplate