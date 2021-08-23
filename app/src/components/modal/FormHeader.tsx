import React from 'react'
import { Typography } from '@material-ui/core'
import CustomButton from '../common/atoms/CustomButton'
import { ModalProps } from './_PropsType'
import ModalFormStyle from './ModalFormStyle'

const FormHeader = ({
  modalTitle,
  modalCloseHandler
}: ModalProps) => {
  
  const classes = ModalFormStyle()
  
  return (
    <div className={ classes.modalHeader }>
      <Typography variant='h4' color='secondary'>
        { modalTitle }
      </Typography>
      <CustomButton onClick={ modalCloseHandler }>
        閉じる
      </CustomButton>
    </div>
  )
}

export default FormHeader
