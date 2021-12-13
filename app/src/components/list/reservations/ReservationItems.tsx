import TableRow from '@/components/common/atoms/TableRow'
import React from 'react'
import { IListProps } from '../_PropsType'

const ReservationItems = ({ reservation }: IListProps) => {
  return (
    <TableRow url='reservation' id={reservation?.id}>
      <td>{reservation?.shop?.name}</td>
      <td>
        {`${reservation?.user?.firstNameKana} ${reservation?.user?.lastNameKana}`}
      </td>
      <td>{reservation?.menuItem?.name}</td>
      <td>{reservation?.stylist?.name}</td>
      <td>{reservation?.status}</td>
    </TableRow>
  )
}

export default ReservationItems
