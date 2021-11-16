import React from 'react'
import Grid from '@material-ui/core/Grid'
import { IMainTemplateProps } from '../_PropsType'
import { StyledHeader } from '@components/common/CommonStyle'
import CustomButton from '@/components/common/atoms/CustomButton'
import H1 from '../atoms/H1'

const Header = ({ onLogout }: IMainTemplateProps) => {
  return (
    <StyledHeader position='static'>
      <Grid
        container
        alignItems='center'
        justifyContent='space-between'
        className='header-items'
      >
        <Grid item>
          <H1>ResHub-admin</H1>
        </Grid>
        <Grid item>
          <CustomButton onClick={onLogout} classes='logout-button'>
            Logout
          </CustomButton>
        </Grid>
      </Grid>
    </StyledHeader>
  )
}

export default Header
