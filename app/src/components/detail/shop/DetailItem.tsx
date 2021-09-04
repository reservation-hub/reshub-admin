import React from 'react'
import { StyledPaper } from '../../CommonStyle'
import { UserListProps } from '../../user/_PropsType'
import ListTopBar from '../../common/atoms/ListTopBar'
import { HeaderType } from '../../common/_Constants'

const DetailItem = ({
  shop,
  modalOpenHandler,
  subModalHandler
}: UserListProps) => {
  return (
    <StyledPaper>
      <ListTopBar
        title={ `${ shop?.name }の詳細` }
        type={ HeaderType.DETAIL }
        modalOpenHandler={ modalOpenHandler }
        subModalHandler={ subModalHandler }
      />
    </StyledPaper>
  )
}

export default DetailItem
