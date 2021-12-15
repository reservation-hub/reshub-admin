import TableRow from '@components/common/atoms/TableRow'
import React from 'react'
import { IListProps } from '@components/list/_PropsType'

const ReservationItems = ({ reservation }: IListProps) => {
  return (
    <TableRow url='reservation' id={reservation?.id}>
      <td className='p-4'>
        {String(reservation?.shop?.name).length >= 10
          ? `${reservation?.shop?.name?.substring(0, 8)}...`
          : reservation?.shop?.name}
      </td>
      <td className='p-4'>
        {`${reservation?.user?.firstNameKana} ${reservation?.user?.lastNameKana}`}
      </td>
      <td className='p-4'>{reservation?.menuItem?.name}</td>
      <td className='p-4'>{reservation?.stylist?.name}</td>
      <td className='p-4'>{reservation?.status}</td>
    </TableRow>
  )
}

export default ReservationItems
