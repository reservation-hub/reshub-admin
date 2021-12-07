import React from 'react'

export interface IModalProps {
  children?: React.ReactNode
  modalOpen?: boolean
  modalCloseHandler: () => void
  modalHandler?: () => void
}
