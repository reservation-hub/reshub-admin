import React from 'react'
import {
  Dialog
 } from '@material-ui/core'

const ModalOverlay = ({
  children,
  modalOpen,
  modalCloseHandler,
  modalOpenHandler
}) => {
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
