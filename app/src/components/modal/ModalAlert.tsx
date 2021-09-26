import React from 'react'
import CustomButton from '@components/common/atoms/CustomButton'
import { ModalProps } from './_PropsType'
import ModalStyle from './ModalStyle'

const ModalAlert = ({
  alertText,
  modalCloseHandler,
  modalHandler,
  buttonText
}: ModalProps) => {
  const classes = ModalStyle()

  return (
    <div className={classes.Container}>
      <div className='font-2 color-primary font-w-600'>
        <span>{alertText}</span>
      </div>
      <div className='flexbox space-between'>
        <CustomButton onClick={modalHandler}>{buttonText}</CustomButton>
        <CustomButton onClick={modalCloseHandler}>戻る</CustomButton>
      </div>
    </div>
  )
}

export default ModalAlert
