import React from 'react'
import CustomButton from '@components/common/atoms/CustomButton'
import { IModalProps } from './_PropsType'
import '@styles/modal.css'

const ModalAlert = ({
  alertText,
  modalCloseHandler,
  modalHandler,
  buttonText,
}: IModalProps) => {

  return (
    <div className='w-[30rem] bg-secondary-main p-[3rem] text-center rounded-[.5rem]'>
      <span className='text-[1.6rem]'>{alertText}</span>
      <div className='flex justify-between mt-4'>
        <CustomButton onClick={modalHandler}>{buttonText}</CustomButton>
        <CustomButton onClick={() => (modalCloseHandler)}>戻る</CustomButton>
      </div>
    </div>
  )
}

export default ModalAlert
