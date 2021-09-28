import React from 'react'
import ListTopBar from '@components/common/atoms/ListTopBar'
import TableLayout from '@components/common/atoms/TableLayout'
import SalonItem from './SalonItem'
import { IListProps } from '../_PropsType'
import { SALON_CELL } from '@constants/Table'
import { HEADER_TYPE } from '@constants/Common'

const SalonList = ({ shops, modalOpenHandler }: IListProps) => {
  return (
    <>
      <ListTopBar
        title='サロン一覧'
        type={HEADER_TYPE.LIST}
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
