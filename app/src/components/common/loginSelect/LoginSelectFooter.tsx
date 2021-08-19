import React from 'react'

import { Container } from '@material-ui/core'
import H1 from '../atoms/H1'

const LoginSelectFooter = () => {
  return (
    <Container maxWidth='sm' style={ { marginTop: '1.5rem', color: '#fff' } }>
      <H1>Copyright 2021 Reshub</H1>
    </Container>
  )
}

export default LoginSelectFooter
