import React from 'react'
import SubHeader from '@/components/common/atoms/SubHeader'
import { IDetailProps } from '../_PropsType'
import { HEADER_TYPE } from '@constants/Common'
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
    id: number
    name: string
    reservationCount: number
  }[] = [
    { id: 1, name: 'TEST', reservationCount: 1 },
    { id: 2, name: 'TEST', reservationCount: 1 },
    { id: 3, name: 'TEST', reservationCount: 1 },
    { id: 4, name: 'TEST', reservationCount: 1 },
    { id: 5, name: 'TEST', reservationCount: 1 }
  ]

  return (
    <>
      <SubHeader
        title={`${shop?.name}の詳細`}
        type={HEADER_TYPE.DETAIL}
        modalOpenHandler={modalOpenHandler}
        subModalHandler={subModalHandler}
      >
        <CustomButton onClick={history.goBack}>戻る</CustomButton>
      </SubHeader>
      <div className='container flex justify-between'>
        <ShopData shop={shop} />
        <div className='w-[55rem] h-full'>
          <TableLayout cell={STYLELIST_CELL}>
            {styleList.map((value, index) => (
              <TableRow key={index}>
                <StyledTableCell>{value?.id}</StyledTableCell>
                <StyledTableCell>{value?.name}</StyledTableCell>
                <StyledTableCell>{value?.reservationCount}</StyledTableCell>
              </TableRow>
            ))}
          </TableLayout>
        </div>
      </div>
    </>
  )
}

export default DetailItem
