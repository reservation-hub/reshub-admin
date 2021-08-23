import React from 'react'
import CustomButton from '../common/atoms/CustomButton'
import { ModalProps } from './_PropsType'

const ModalAlert = ({
  alertText,
  modalCloseHandler,
  onDelete
}: ModalProps) => {
  return (
    <div>
      <span>{ alertText }</span>
      <CustomButton onClick={ onDelete }>削除</CustomButton>
      <CustomButton onClick={ modalCloseHandler }>戻る</CustomButton>
    </div>
  )
}

export default ModalAlert
