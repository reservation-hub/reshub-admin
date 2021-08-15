import React from 'react'

export type ModalProps = {
  children: React.ReactNode
  modalOpen: boolean
  modalCloseHandler: () => void
  modalTitle: string
}
