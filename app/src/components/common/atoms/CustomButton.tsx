import React from 'react'
import { IButtonProps } from '../_PropsType'
import CommonStyle from '../../CommonStyle'

const CustomButton = ({
  children,
  onClick,
  className,
  disabled
}: IButtonProps) => {

  const classes = CommonStyle()

  return (
    <button
      type="submit"
      onClick={ onClick }
      disabled={ disabled }
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