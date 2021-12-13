import TableRow from '@/components/common/atoms/TableRow'
import React from 'react'
import { IListProps } from '../_PropsType'

const StylistItem = ({ stylist }: IListProps) => {
  return (
    <TableRow
      url='stylist'
      id={stylist?.id}
    >
      <td>{stylist?.name}</td>
      <td>{stylist?.price}</td>
      <td>{stylist?.reservations?.length ?? '0件'}</td>
    </TableRow>
  )
}

export default StylistItem