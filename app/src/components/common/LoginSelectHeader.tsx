import React from 'react'

import { Container, Typography } from '@material-ui/core'

const LoginSelectHeader = () => {
  return (
    <Container 
      maxWidth='sm'
      style={{ marginBottom: '1rem', color: '#fff', textAlign: 'right' }}
    >
      <Typography variant='h4'>
        Reshub-Admin
      </Typography>
    </Container>
  )
}

export default LoginSelectHeader
