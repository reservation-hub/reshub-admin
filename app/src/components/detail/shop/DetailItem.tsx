import React from 'react'
import { StyledPaper } from '../../CommonStyle'
import ListTopBar from '../../common/atoms/ListTopBar'
import { HeaderType } from '../../common/_Constants'
import { IDetailProps } from '../_PropsType'

const DetailItem = ({
  shop,
  modalOpenHandler,
  subModalHandler
}: IDetailProps) => {
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
