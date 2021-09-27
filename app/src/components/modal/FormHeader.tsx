import React from 'react'
import Typography from '@material-ui/core/Typography'
import CustomButton from '@components/common/atoms/CustomButton'
import { ModalProps } from './_PropsType'
import ModalStyle from './ModalStyle'

const FormHeader = ({ modalTitle, modalCloseHandler }: ModalProps) => {
  const classes = ModalStyle()

  return (
    <div className={classes.modalHeader}>
      <Typography variant='h4' color='secondary'>
        {modalTitle}
      </Typography>
      <CustomButton onClick={modalCloseHandler}>閉じる</CustomButton>
    </div>
  )
}

export default FormHeader
