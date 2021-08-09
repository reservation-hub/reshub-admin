import React from 'react'

import { Dialog } from '@material-ui/core'

interface ModalProps {
  children: React.ReactNode
  modalOpen: boolean
  modalCloseHandler: () => void
}

const ModalOverlay = ({
  children,
  modalOpen,
  modalCloseHandler
}: ModalProps) => {
  return (
    <div>
      <Dialog open={ modalOpen } onClose={ modalCloseHandler } >
        { children }
      </Dialog>
    </div>
  )
}

export default ModalOverlay
