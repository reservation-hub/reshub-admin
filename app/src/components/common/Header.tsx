import React from 'react'

import { Grid, Typography } from '@material-ui/core'
import { HeaderProps } from './_PropsType'
import { StyledHeader } from '../CommonStyle'

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
          <button onClick={ onLogout }>
            Logout
          </button>
        </Grid>
      </Grid>
    </StyledHeader>
  )
}

export default Header