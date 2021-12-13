import TableLayout from '@/components/common/atoms/TableLayout'
import { STYLELIST_CELL } from '@/constants/Table'
import React from 'react'
import { IListProps } from '../_PropsType'

const StylistList = ({ stylists }: IListProps) => {
  return (
    <TableLayout cell={STYLELIST_CELL}>
      {stylists?.map((value, index) => (
        <div key={index}>{value.name}</div>
      ))}
    </TableLayout>
  )
}

export default StylistList