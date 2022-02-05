import React from 'react'
import CustomButton from './CustomButton'
import H1 from './H1'
import { TextProps } from '@components/common/_PropsType'
import { HEADER_TYPE } from '@constants/Common'

export interface ISubHeaderProps extends TextProps {
  type?: typeof HEADER_TYPE[keyof typeof HEADER_TYPE]
  modalOpenHandler?: () => void
  subModalHandler?: () => void
  noDelete?: boolean
  noEdit?: boolean
}

const SubHeader = ({
  text,
  modalOpenHandler,
  type,
  subModalHandler,
  children,
  noDelete,
  noEdit,
}: ISubHeaderProps) => {
  const showDeleteButton = type === HEADER_TYPE.DETAIL && noDelete === undefined
  const showEditButton = type !== HEADER_TYPE.DASHBOARD && noEdit === undefined
  console.log(type === HEADER_TYPE.DETAIL)
  console.log(showDeleteButton)
  console.log(showEditButton)
  return (
    <div className='flex justify-between items-center mb-4'>
      <H1 classes='text-primary' text={text} />

      <div className='flex items-center'>
        {children}
        {showDeleteButton && (
          <CustomButton classes='ml-2' onClick={subModalHandler}>
            削除
          </CustomButton>
        )}
        {showEditButton && (
          <CustomButton classes='ml-2' onClick={modalOpenHandler}>
            {type === HEADER_TYPE.LIST ? '新規登録' : '編集'}
          </CustomButton>
        )}
      </div>
    </div>
  )
}

export default SubHeader
