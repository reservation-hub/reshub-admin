import React from 'react'

import { Container, Typography } from '@material-ui/core'

const LoginSelectFooter = () => {
  return (
    <Container 
      maxWidth='sm'
      style={{ marginTop: '1rem', color: '#fff' }}
    >
      <Typography variant='h5'>
        Copyright 2021 Reshub
      </Typography>
    </Container>
  )
}

export default LoginSelectFooter
