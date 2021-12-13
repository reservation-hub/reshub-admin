import React from 'react'
import TableLayout from '@components/common/atoms/TableLayout'
import SalonItem from './SalonItem'
import { IListProps } from '../_PropsType'
import { SALON_CELL } from '@constants/Table'

const SalonList = ({ shops, admin }: IListProps) => {
  return (
    <TableLayout cell={SALON_CELL}>
      {shops?.map((value: any, index) => (
        <SalonItem shop={value} key={index} admin={admin} />
      ))}
    </TableLayout>
  )
}
export default SalonList
