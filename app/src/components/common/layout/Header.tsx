import React from 'react'
import { IMainTemplateProps } from '../_PropsType'
import CustomButton from '@/components/common/atoms/CustomButton'
import H1 from '../atoms/H1'

const Header = ({ onLogout }: IMainTemplateProps) => {
  const styled =
    'w-full h-[6rem] top-0 bg-primary flex justify-between items-center text-secondary-main p-4'

  return (
    <header className={styled}>
      <H1>Reshub-admin</H1>
      <CustomButton onClick={onLogout}>Logout</CustomButton>
    </header>
  )
}

export default Header
