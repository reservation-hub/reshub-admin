import React from 'react'

export type ModalOverlayProps = {
  children?: React.ReactNode
  modalOpen: boolean
  modalCloseHandler?: () => void
}

export type ModalProps = {
  modalCloseHandler: () => void
  alertText?: string
  modalTitle?: string
  modalHandler?: () => void
  buttonText?: string
}
