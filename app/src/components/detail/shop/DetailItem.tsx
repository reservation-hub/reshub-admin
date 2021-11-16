import React from 'react'
import ListTopBar from '@components/common/atoms/ListTopBar'
import { IDetailProps } from '../_PropsType'
import { HEADER_TYPE } from '@constants/Common'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import ShopData from '@components/detail/shop/ShopData'
import CustomButton from '@components/common/atoms/CustomButton'
import TableLayout from '@/components/common/atoms/TableLayout'
import { STYLELIST_CELL } from '@/constants/Table'
import { TableRow } from '@material-ui/core'
import { StyledTableCell } from '@/components/list/ListStyle'
import history from '@/utils/routes/history'

const DetailItem = ({
  shop,
  modalOpenHandler,
  subModalHandler
}: IDetailProps) => {

  const styleList: {
    id: number, name: string, reservationCount: number
  }[] = [
    {id: 1, name: 'TEST', reservationCount: 1},
    {id: 2, name: 'TEST', reservationCount: 1},
    {id: 3, name: 'TEST', reservationCount: 1},
    {id: 4, name: 'TEST', reservationCount: 1},
    {id: 5, name: 'TEST', reservationCount: 1},
  ]

  return (
    <>
      <ListTopBar
        title={`${shop?.name}の詳細`}
        type={HEADER_TYPE.DETAIL}
        modalOpenHandler={modalOpenHandler}
        subModalHandler={subModalHandler}
      >
        <CustomButton onClick={history.goBack}>戻る</CustomButton>
      </ListTopBar>
      <Grid container justifyContent='space-between' alignItems='center'>
        <ShopData shop={shop} />
        <Grid md={5} item>
          <Box>
            <TableLayout cell={STYLELIST_CELL}>
              {styleList.map((value, index) => (
                <TableRow key={index}>
                  <StyledTableCell>
                    {value?.id}
                  </StyledTableCell>
                  <StyledTableCell>
                    {value?.name}
                  </StyledTableCell>
                  <StyledTableCell>
                    {value?.reservationCount}
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableLayout>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default DetailItem
