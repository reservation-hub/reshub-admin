import React from 'react'
import IsEmpty from '@components/common/atoms/IsEmpty'
import { IListProps } from '@components/list/_PropsType'
import Table from '@components/common/atoms/Table'
import useConvertTime from '@utils/hooks/useConverTime'
import { ReservationForList } from '@utils/api/request-response-types/models/Reservation'

const ReservationsList = ({
  item,
  usePaginate,
  page,
  totalPage,
  pageChangeHandler
}: IListProps) => {
  const rowItems = item?.map((reservation: ReservationForList) => ({
    ...reservation,
    stylistName: String(reservation.stylistName),
    reservationDate: useConvertTime('ymd', reservation.reservationDate)
  }))

  return (
    <>
      <Table
        cell={[
          { column: '店舗名', key: 'shopName' },
          { column: '予約者', key: 'clientName' },
          { column: 'メニュー名', key: 'menuName' },
          { column: 'スタイリスト名', key: 'stylistName' },
          { column: '予約日', key: 'reservationDate' },
          { column: 'ステータス', key: 'status' }
        ]}
        row={rowItems}
        url='reservation'
        subParams
        usePaginate={usePaginate}
        page={page} 
        totalPage={totalPage}
        pageChangeHandler={pageChangeHandler}
      />
      {item?.length === 0 && <IsEmpty text='予約' />}
    </>
  )
}

export default ReservationsList
