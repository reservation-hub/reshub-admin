import React from 'react'
import H1 from '@components/common/atoms/H1'
import CustomButton from '@components/common/atoms/CustomButton'
import history from '@utils/routes/history'
import { TextProps } from '@components/common/_PropsType'

const Header = ({ text, onClick }: TextProps) => {
  return (
    <div className='flex justify-between items-center'>
      <H1 classes='text-primary text-[2.6rem]'>{text}</H1>
      <CustomButton onClick={onClick ? onClick : history.goBack}>
        戻る
      </CustomButton>
    </div>
  )
}

export default Header
