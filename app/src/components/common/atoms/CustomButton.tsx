import React from 'react'
import { IButtonProps } from '../_PropsType'
import { makeStyles } from '@material-ui/core/styles'

const classes = makeStyles((theme) => ({
  root: {
    width: '11rem',
    height: '3.5rem',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '.5rem',
    backgroundColor: theme.palette.secondary.main,
    cursor: 'pointer',
    color: '#999',
    transition: 'all .5s ease 0s',
    lineHeight: 'unset',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    '&:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.primary.main,
      transition: 'all .5s ease 0s',
      transform: 'translateY(0.2rem)'
    }
  }
}))

const CustomButton = ({
  children,
  onClick,
  className,
  disabled
}: IButtonProps) => {
  return (
    <button
      type='submit'
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${classes().root}` || classes().root}
    >
      {children || 'button'}
    </button>
  )
}

export default CustomButton
