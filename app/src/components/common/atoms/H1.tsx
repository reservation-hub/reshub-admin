import React from 'react'

import { Typography } from '@material-ui/core'
import { H1Props } from '../_PropsType'

const H1 = ({ children, className }: H1Props) => {
  return (
    <Typography
      variant='h1'
      style={{ fontSize: '3.2rem', fontWeight: 'bold' }}
      className={ className }
    >
      { children }
    </Typography>
  )
}

export default H1