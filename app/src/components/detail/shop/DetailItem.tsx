import React from 'react'
import { StyledPaper } from '@components/CommonStyle'
import ListTopBar from '@components/common/atoms/ListTopBar'
import { IDetailProps } from '../_PropsType'
import { HEADER_TYPE } from '@constants/Common'

const DetailItem = ({
  shop,
  modalOpenHandler,
  subModalHandler
}: IDetailProps) => {
  return (
    <StyledPaper>
      <ListTopBar
        title={`${shop?.name}の詳細`}
        type={HEADER_TYPE.DETAIL}
        modalOpenHandler={modalOpenHandler}
        subModalHandler={subModalHandler}
      />
    </StyledPaper>
  )
}

export default DetailItem
