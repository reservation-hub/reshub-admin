import React from 'react'
import CustomButton from './CustomButton'
import H1 from './H1'
import { ClassesAndChildren } from '@components/common/_PropsType'
import { HEADER_TYPE } from '@constants/Common'

export interface ISubHeaderProps extends ClassesAndChildren {
  title: string
  type?: typeof HEADER_TYPE[keyof typeof HEADER_TYPE]
  modalOpenHandler?: () => void
  subModalHandler?: () => void
}

const SubHeader = ({
  title,
  modalOpenHandler,
  type,
  subModalHandler,
  children
}: ISubHeaderProps) => {
  return (
    <div className='flex justify-between mb-4'>
      <div>
        <H1 classes='text-primary'>{title}</H1>
      </div>
      <div>
        {children}
        {type === HEADER_TYPE.DETAIL && (
          <CustomButton classes='ml-2' onClick={subModalHandler}>
            削除
          </CustomButton>
        )}
        {type !== HEADER_TYPE.DASHBOARD && (
          <CustomButton classes='ml-2' onClick={modalOpenHandler}>
            {type === HEADER_TYPE.LIST ? '新規登録' : '編集'}
          </CustomButton>
        )}
      </div>
    </div>
  )
}

export default SubHeader
