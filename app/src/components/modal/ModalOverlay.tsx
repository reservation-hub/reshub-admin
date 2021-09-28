import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { IModalProps } from './_PropsType'

const ModalOverlay = ({
  children,
  modalOpen,
  modalCloseHandler
}: IModalProps) => {
  return (
    <Dialog open={Boolean(modalOpen)} onClose={modalCloseHandler}>
      {children}
    </Dialog>
  )
}

export default ModalOverlay
