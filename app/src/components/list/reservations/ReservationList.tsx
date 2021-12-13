import TableLayout from '@/components/common/atoms/TableLayout'
import { RESERVATION_CELL } from '@/constants/Table'
import React from 'react'
import { IListProps } from '../_PropsType'
import ReservationItems from './ReservationItems'

const ReservationsList = ({ reservations }: IListProps) => {
  return (
    <TableLayout cell={RESERVATION_CELL}>
      {reservations?.map((value, index) => (
        <ReservationItems reservation={value} key={index} />
      ))}
    </TableLayout>
  )
}

export default ReservationsList
