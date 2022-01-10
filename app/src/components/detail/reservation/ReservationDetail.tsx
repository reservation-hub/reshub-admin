import React from 'react'
import CustomButton from '@components/common/atoms/CustomButton'
import SubHeader from '@components/common/atoms/SubHeader'
import { HEADER_TYPE } from '@constants/Common'
import history from '@utils/routes/history'
import { IDetailProps } from '@components/detail/_PropsType'
import DataTable from '@components/common/atoms/DataTable'
import useConvertTime from '@utils/hooks/useConverTime'
import { ReservationResponse } from '@utils/api/request-response-types/Shop'
import useConvertStatus from '@/utils/hooks/useStatus'

const ReservationDetail = ({
  item,
  modalOpenHandler,
  subModalHandler
}: IDetailProps) => {
  type ReservationType = ReservationResponse & {
    reservationDate: string
    status: string
  }

  const data = {
    ...item,
    reservationDate: useConvertTime('ymdhm', item?.reservationDate),
    status: useConvertStatus(item?.status)
  } as ReservationType

  return (
    <>
      <SubHeader
        title={`${item?.id}詳細`}
        type={HEADER_TYPE.DETAIL}
        modalOpenHandler={modalOpenHandler}
        subModalHandler={subModalHandler}
      >
        <CustomButton onClick={history.goBack}>戻る</CustomButton>
      </SubHeader>
      <DataTable
        cell={[
          { column: '予約者', key: 'clientName' },
          { column: '店舗名', key: 'shopName' },
          { column: 'メニュー名', key: 'menuName' },
          { column: '指名スタイリスト名', key: 'stylistName' },
          { column: '予約日', key: 'reservationDate' },
          { column: 'ステータス', key: 'status' }
        ]}
        item={data}
        classes='min-w-[18rem]'
      />
    </>
  )
}

export default ReservationDetail
