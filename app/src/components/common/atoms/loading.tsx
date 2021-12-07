import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'

const classes = makeStyles(() => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}))

const Loading = () => {
  return (
    <div className='absolute top-2/4 left-2/4 h-full'>
      <span>test</span>
    </div>
  )
}

export default Loading
