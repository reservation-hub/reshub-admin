import TableLayout from '@/components/common/atoms/TableLayout'
import { RESERVATION_CELL } from '@/constants/Table'
import React from 'react'
import { IListProps } from '../_PropsType'

const ReservationsList = ({ reservations }: IListProps) => {
  return (
    <TableLayout cell={RESERVATION_CELL}>
      {reservations?.map((value, index) => (
        <div key={index}>{value.user.firstNameKana}</div>
      ))}
    </TableLayout>
  )
}

export default ReservationsList