import React from 'react'
import { Container } from '@material-ui/core'
import H1 from '../atoms/H1'

const LoginSelectHeader = () => {
  return (
    <Container
      maxWidth='sm'
      style={{ marginBottom: '1.5rem', color: '#fff', textAlign: 'right' }}>
      <H1>Reshub-Admin</H1>
    </Container>
  )
}

export default LoginSelectHeader
