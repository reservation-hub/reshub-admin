import React from 'react'
import MainTemplate from '@components/common/layout/MainTemplate'
import { StyledPaper } from '@components/CommonStyle'

const Error = () => {
  return (
    <MainTemplate>
      <StyledPaper>
        <h2>404</h2>
        <p>コンテンツがありません。</p>
      </StyledPaper>
    </MainTemplate>
  )
}

export default Error
