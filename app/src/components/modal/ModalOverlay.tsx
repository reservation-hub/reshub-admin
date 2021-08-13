import React from 'react'

import { Dialog, Typography } from '@material-ui/core'
import { ModalProps } from './_PropsType'

import ModalFormStyle from './ModalFormStyle'
import CustomButton from '../common/atoms/CustomButton'

const ModalOverlay = ({
  children,
  modalOpen,
  modalCloseHandler,
  modalTitle
}: ModalProps) => {

  const classes = ModalFormStyle()

  return (
    <div>
      <Dialog open={ modalOpen } onClose={ modalCloseHandler } >
        <div className={ classes.modalHeader }>
          <Typography variant='h5' color='secondary'>
            { modalTitle }
          </Typography>
          <CustomButton onClick={ modalCloseHandler }>
            閉じる
          </CustomButton>
        </div>
        { children }
      </Dialog>
    </div>
  )
}

export default ModalOverlay
