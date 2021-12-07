import React from 'react'
import { IModalProps } from './_PropsType'
import '@styles/modal.css'

const ModalOverlay = ({
  children,
  modalOpen,
  modalCloseHandler
}: IModalProps) => {
  return (
    <>
      {modalOpen && (
        <div onClick={modalCloseHandler} className='modal-overlay'>
          <div className='modal-container transform translate-x-[-50%] translate-y-[-50%]'>
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default ModalOverlay
