import React from 'react'
import { IListProps } from '@components/list/_PropsType'
import Table from '@components/common/atoms/Table'
import useConvertTime from '@utils/hooks/useConvertTime'
import { ReservationForList } from '@utils/api/request-response-types/models/Reservation'
import useConvertStatus from '@utils/hooks/useStatus'

const ReservationsList = ({
  item,
  usePaginate,
  page,
  totalPage,
  pageChangeHandler
}: IListProps) => {
  const rowItems = item?.map((reservation: ReservationForList) => ({
    ...reservation,
    stylistName: String(reservation.stylistName) ?? '指名なし',
    reservationDate: useConvertTime('ymd', reservation.reservationDate),
    status: useConvertStatus(reservation.status)
  }))

  return (
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
      url='reservation/detail'
      subParams
      usePaginate={usePaginate}
      page={page}
      totalPage={totalPage}
      pageChangeHandler={pageChangeHandler}
    />
  )
}

export default ReservationsList
