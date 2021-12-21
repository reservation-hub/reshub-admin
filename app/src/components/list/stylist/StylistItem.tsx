import React from 'react'
import TableRow from '@components/common/atoms/TableRow'
import { IListProps } from '../_PropsType'

const StylistItem = ({ stylist }: IListProps) => {
  return (
    <TableRow url='stylist' id={stylist?.id}>
      <td className='p-4'>{stylist?.name}</td>
      <td className='p-4'>{stylist?.price}円</td>
      <td className='p-4'>{stylist?.reservationCount ?? '0件'}</td>
    </TableRow>
  )
}

export default StylistItem
