import React from 'react'

export interface IModalProps {
  children?: React.ReactNode
  modalOpen?: boolean
  modalCloseHandler: () => void
  alertText?: string
  modalTitle?: string
  modalHandler?: () => void
  buttonText?: string
}
