import React from 'react'
import { ButtonProps } from '../_PropsType'
import CommonStyle from '../../CommonStyle'

const CustomButton = ({
  children,
  onClick,
  className,
  disabled,
}: ButtonProps) => {

  const classes = CommonStyle()

  return (
    <button
      onClick={ onClick }
      disabled={disabled}
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