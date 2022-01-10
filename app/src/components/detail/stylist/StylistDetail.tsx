import React from 'react'
import CustomButton from '@components/common/atoms/CustomButton'
import SubHeader from '@components/common/atoms/SubHeader'
import { HEADER_TYPE } from '@constants/Common'
import history from '@utils/routes/history'
import { IDetailProps } from '../_PropsType'
import DataTable from '@components/common/atoms/DataTable'
import { StylistResponse } from '@/utils/api/request-response-types/Shop'

const StylistDetail = ({
  item,
  modalOpenHandler,
  subModalHandler
}: IDetailProps) => {
  type StylistDetail = StylistResponse & {
    price: string
    businessTime: string
  }

  const data = {
    ...item,
    price: `${item?.price.toLocaleString()}¥`,
    days: item?.days.join(' ・ '),
    businessTime: `${item?.startTime} - ${item?.endTime}`
  } as StylistDetail
  return (
    <>
      <SubHeader
        title={`${data.name}詳細`}
        type={HEADER_TYPE.DETAIL}
        modalOpenHandler={modalOpenHandler}
        subModalHandler={subModalHandler}
      >
        <CustomButton onClick={history.goBack}>戻る</CustomButton>
      </SubHeader>

      <DataTable 
        cell={[
          { column: 'スタイリスト名', key: 'name' },
          { column: '所属店舗', key: 'shopName' },
          { column: '稼働日', key: 'days' },
          { column: '稼働時間', key: 'businessTime' },
          { column: '指名料', key: 'price' }
        ]}
        item={data}
      />
    </>
  )
}

export default StylistDetail