import React from 'react'

import {
  Dialog
 } from '@material-ui/core'

interface ModalProps {
  children: React.ReactNode
  modalOpen: boolean
  modalOpenHandler: () => void
  modalCloseHandler: () => void
}

const ModalOverlay = ({
  children,
  modalOpen,
  modalCloseHandler,
  modalOpenHandler
}: ModalProps) => {

  return (
    <div>
      <button onClick={ modalOpenHandler }>
        open modal
      </button>
      <Dialog
        open={ modalOpen }
        onClose={ modalCloseHandler }
      >
        { children }
      </Dialog>
    </div>
  )

}

export default ModalOverlay
