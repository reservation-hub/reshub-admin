import React from 'react'
import ListTopBar from '@components/common/atoms/ListTopBar'
import TableLayout from '@components/common/atoms/TableLayout'
import { HeaderType } from '@components/common/_Constants'
import SalonItem from './SalonItem'
import { IListProps } from '../_PropsType'
import { SALON_CELL } from '@constants/Table'

const SalonList = ({ shops, modalOpenHandler }: IListProps) => {
  return (
    <>
      <ListTopBar
        title='サロン一覧'
        type={HeaderType.LIST}
        modalOpenHandler={modalOpenHandler}
      />
      <TableLayout cell={SALON_CELL} data={shops}>
        {shops?.map((value, index) => (
          <SalonItem shop={value} key={index} />
        ))}
      </TableLayout>
    </>
  )
}
export default SalonList
