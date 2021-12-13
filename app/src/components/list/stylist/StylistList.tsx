import TableLayout from '@/components/common/atoms/TableLayout'
import { STYLELIST_CELL } from '@/constants/Table'
import React from 'react'
import { IListProps } from '../_PropsType'
import StylistItem from './StylistItem'

const StylistList = ({ stylists }: IListProps) => {
  return (
    <TableLayout cell={STYLELIST_CELL}>
      {stylists?.map((value, index) => (
        <StylistItem stylist={value} key={index} />
      ))}
    </TableLayout>
  )
}

export default StylistList
