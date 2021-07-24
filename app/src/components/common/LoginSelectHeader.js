import React from 'react'
import { 
  Container,
  Typography
} from '@material-ui/core'

const LoginSelectHeader = () => {
  return (
    <Container 
      maxWidth='sm'
      align='right' 
      style={{ marginBottom: '1rem', color: '#fff' }}
    >
      <Typography variant='h4'>
        Reshub-Admin
      </Typography>
    </Container>
  )
}

export default LoginSelectHeader
