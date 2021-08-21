import React from 'react'
import CustomButton from '../common/atoms/CustomButton'
import { AlertProps } from './_PropsType'

const ModalAlert = ({
  alertText,
  modalCloseHandler,
  onDelete
}: AlertProps) => {
  return (
    <div>
      <span>{ alertText }</span>
      <CustomButton onClick={ onDelete }>削除</CustomButton>
      <CustomButton onClick={ modalCloseHandler }>戻る</CustomButton>
    </div>
  )
}

export default ModalAlert
