import TableRow from '@components/common/atoms/TableRow'
import React from 'react'
import { IListProps } from '@components/list/_PropsType'

const ReservationItems = ({ reservation }: IListProps) => {
  return (
    <TableRow url='reservation' id={reservation?.id} subParams={5}>
      <td className='p-4'>
        {String(reservation?.shopName).length >= 10
          ? `${reservation?.shopName?.substring(0, 8)}...`
          : reservation?.shopName}
      </td>
      <td className='p-4'>{`${reservation?.clientName}`}</td>
      <td className='p-4'>{reservation?.menuItemName}</td>
      <td className='p-4'>{reservation?.stylistName}</td>
      <td className='p-4'>{reservation?.status}</td>
    </TableRow>
  )
}

export default ReservationItems
