import React from 'react'

import { Dialog, Typography } from '@material-ui/core'
import { ModalProps } from './_PropsType'
import ModalFormStyle from './ModalFormStyle'

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
          <button onClick={ modalCloseHandler }>
            閉じる
          </button>
        </div>
        { children }
      </Dialog>
    </div>
  )
}

export default ModalOverlay
