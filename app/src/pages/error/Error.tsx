import React from 'react'
import MainTemplate from '@components/common/layout/MainTemplate'
import { StyledPaper } from '@components/common/CommonStyle'

const Error = () => {
  return (
    <MainTemplate>
      <StyledPaper>
        <div>
          <h2>404</h2>
          <p>コンテンツがありません</p>
        </div>
      </StyledPaper>
    </MainTemplate>
  )
}

export default Error
