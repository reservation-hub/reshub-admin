import React from 'react'
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
  const spinner =
    'w-[5rem] h-[5rem] absolute top-2/4 left-2/4 animate-spin border-4 border-t-transparent border-primary rounded-full'
  return (
    <div className='container h-full'>
      <div className={spinner} />
    </div>
  )
}

export default Loading
