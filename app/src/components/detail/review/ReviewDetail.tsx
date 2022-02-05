import React from 'react'
import CustomButton from '@components/common/atoms/CustomButton'
import SubHeader from '@components/common/atoms/SubHeader'
import { HEADER_TYPE } from '@constants/Common'
import history from '@utils/routes/history'
import { IDetailProps } from '@components/detail/_PropsType'
import DataTable from '@components/common/atoms/DataTable'
import useConvertTime from '@utils/hooks/useConvertTime'
import { ReviewResponse } from '@utils/api/request-response-types/Shop'
import useConvertStatus from '@utils/hooks/useStatus'

const ReservationDetail = ({
  item,
  modalOpenHandler,
  subModalHandler
}: IDetailProps) => {
  type ReviewType = ReviewResponse

  const data = {
    ...item
  } as ReviewType

  return (
    <>
      <SubHeader
        text={`${item?.id}詳細`}
        type={HEADER_TYPE.DETAIL}
        noDelete
        noEdit
      >
        <CustomButton onClick={history.goBack}>戻る</CustomButton>
      </SubHeader>
      <DataTable
        cell={[
          { column: '予約者', key: 'clientName' },
          { column: '店舗名', key: 'shopName' },
          { column: '評価', key: 'score' },
          { column: '口コミ', key: 'text' }
        ]}
        item={data}
        classes='min-w-[20rem]'
      />
    </>
  )
}

export default ReservationDetail
