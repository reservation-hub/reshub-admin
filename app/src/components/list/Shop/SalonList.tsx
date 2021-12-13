import React from 'react'
import TableLayout from '@components/common/atoms/TableLayout'
import SalonItem from './SalonItem'
import { IListProps } from '../_PropsType'
import { SALON_CELL } from '@constants/Table'

const SalonList = ({ shops }: IListProps) => {
  return (
    <TableLayout cell={SALON_CELL}>
      {shops?.map((value, index) => (
        <SalonItem shop={value} key={index} />
      ))}
    </TableLayout>
  )
}
export default SalonList
