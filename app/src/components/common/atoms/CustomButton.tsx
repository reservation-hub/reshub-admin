import React from 'react'
import { ButtonProps } from '../_PropsType'
import CommonStyle from '../../CommonStyle'

const CustomButton = ({
  children,
  onClick,
  className
}: ButtonProps) => {

  const classes = CommonStyle()

  return (
    <button
      onClick={ onClick }
      className={
        `${ className } ${ classes.buttonRoot }`
        || classes.buttonRoot
      }
    >
      { children || 'button' }
    </button>
  )

}

export default CustomButton