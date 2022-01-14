import React from 'react'
import H1 from '@components/common/atoms/H1'
import CustomButton from '@components/common/atoms/CustomButton'
import history from '@utils/routes/history'

export interface IFormHeader {
  title: string
}

const Header = ({ title }: IFormHeader) => {
  return (
    <div className='flex justify-between items-center'>
      <H1 classes='text-primary text-[2.6rem]'>{title}</H1>
      <CustomButton onClick={() => history.goBack()}>戻る</CustomButton>
    </div>
  )
}

export default Header
