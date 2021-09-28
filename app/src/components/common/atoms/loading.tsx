import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { StyledPaper } from '@components/CommonStyle'

const Loading = () => {
  return (
    <StyledPaper>
      <span>しばらくお待ち下さい。</span>
      <CircularProgress />
    </StyledPaper>
  )
}

export default Loading
