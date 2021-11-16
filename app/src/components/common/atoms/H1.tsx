import React from 'react'
import Typography from '@material-ui/core/Typography'
import { IH1Props } from '../_PropsType'
import { makeStyles } from '@material-ui/core/styles'

const h1Classes = makeStyles(() => ({
  root: {
    fontSize: '3.2rem',
    fontWeight: 'bold'
  }
}))

const H1 = ({ color, children, classes }: IH1Props) => {
  return (
    <Typography
      variant='h1'
      color={color}
      className={`${h1Classes().root} ${classes}`}
    >
      {children}
    </Typography>
  )
}

export default H1
