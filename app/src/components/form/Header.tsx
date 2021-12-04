import React from 'react'
import H1 from '@components/common/atoms/H1'
import CustomButton from '@components/common/atoms/CustomButton'
import history from '@utils/routes/history'
import { IFormType } from './_PropsType'

const Header = ({ title }: IFormType) => {
  return (
    <div className='flex justify-between'>
      <H1 classes='text-primary'>{title}</H1>
      <CustomButton onClick={() => history.goBack()}>戻る</CustomButton>
    </div>
  )
}

export default Header
