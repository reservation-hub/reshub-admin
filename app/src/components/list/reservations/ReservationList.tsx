import IsEmpty from '@components/common/atoms/IsEmpty'
import TableLayout from '@components/common/atoms/TableLayout'
import { RESERVATION_CELL } from '@constants/Table'
import React from 'react'
import { IListProps } from '@components/list/_PropsType'
import ReservationItems from './ReservationItems'

const ReservationsList = ({ reservations }: IListProps) => {
  return (
    <>
      <TableLayout cell={RESERVATION_CELL}>
        {reservations?.map((value, index) => (
          <ReservationItems reservation={value} key={index} />
        ))}
      </TableLayout>
      {reservations?.length === 0 && <IsEmpty text='予約' />}
    </>
  )
}

export default ReservationsList
