import React from 'react'
import ListTopBar from '@components/common/atoms/ListTopBar'
import { IDetailProps } from '../_PropsType'
import { HEADER_TYPE } from '@constants/Common'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import ShopData from '@components/detail/shop/ShopData'

const DetailItem = ({
  shop,
  modalOpenHandler,
  subModalHandler
}: IDetailProps) => {
  return (
    <>
      <ListTopBar
        title={`${shop?.name}の詳細`}
        type={HEADER_TYPE.DETAIL}
        modalOpenHandler={modalOpenHandler}
        subModalHandler={subModalHandler}
      />
      <Grid container justifyContent='space-between' alignItems='center'>
        <ShopData shop={shop} />
        <Grid md={5} item>
          <Box>
            <span>stylist</span>
            <span>{shop?.stylists}</span>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default DetailItem
