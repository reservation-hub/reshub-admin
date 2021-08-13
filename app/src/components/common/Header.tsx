import React from 'react'

import { Grid, Typography } from '@material-ui/core'
import { HeaderProps } from './_PropsType'
import { StyledHeader } from '../CommonStyle'

import CustomButton from './atoms/CustomButton'

const Header = ({ onLogout }: HeaderProps) => {

  return (
    <StyledHeader position='static'>
      <Grid
        container
        alignItems='center'
        justifyContent='space-between'
        className='header-items'
      >
        <Grid item>
          <Typography variant='h4'>
            ReshHub-admin
          </Typography>
        </Grid>
        <Grid item>
          <CustomButton
            onClick={ onLogout }
            className='logout-button'
          >
            Logout
          </CustomButton>
        </Grid>
      </Grid>
    </StyledHeader>
  )
}

export default Header