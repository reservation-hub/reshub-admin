import React from 'react'

import { Dialog } from '@material-ui/core'
import { ModalOverlayProps } from './_PropsType'

const ModalOverlay = ({
  children,
  modalOpen,
  modalCloseHandler
}: ModalOverlayProps) => {
  return (
    <Dialog open={ modalOpen } onClose={ modalCloseHandler }>
      { children }
    </Dialog>
  )
}

export default ModalOverlay
