import React from 'react'
import SubHeader from '@components/common/atoms/SubHeader'
import { IDetailProps } from '@components/detail/_PropsType'
import { HEADER_TYPE } from '@constants/Common'
import CustomButton from '@components/common/atoms/CustomButton'
import history from '@utils/routes/history'
import StylistList from '@components/list/stylist/StylistList'
import ReservationsList from '@components/list/reservations/ReservationList'
import MenuList from '@components/list/menu/MenuList'
import DataTable from '@components/common/atoms/DataTable'
import { ShopResponse } from '@utils/api/request-response-types/Shop'

const ShopDetail = ({
  item,
  modalOpenHandler,
  subModalHandler
}: IDetailProps) => {
  type ShopDetail = ShopResponse & {
    businessTime: string
    seats: string
  }
  console.log(item)

  const data = {
    ...item,
    address: `${item?.prefectureName}${item?.cityName}${item?.address || ''}`,
    days: item?.days?.join(' ・ '),
    businessTime: `${item?.startTime} - ${item?.endTime}` || '',
    seats: `${item?.seats}席`
  } as ShopDetail

  return (
    <>
      <SubHeader
        text={`${item?.name}の詳細`}
        type={HEADER_TYPE.DETAIL}
        modalOpenHandler={modalOpenHandler}
        subModalHandler={subModalHandler}
      >
        <CustomButton onClick={history.goBack}>戻る</CustomButton>
      </SubHeader>
      <div className='container flex justify-between'>
        <DataTable
          cell={[
            { column: '店舗名', key: 'name' },
            { column: '住所', key: 'address' },
            { column: '電話番号', key: 'phoneNumber' },
            { column: '営業日', key: 'days' },
            { column: '営業時間', key: 'businessTime' },
            { column: '座席数', key: 'seats' },
            { column: '詳細', key: 'details' }
          ]}
          item={data}
        />
        <div className='w-[35rem] h-full'>
          <StylistList item={item?.stylists} />
        </div>
        <div className='w-[30rem]'>
          <MenuList item={item?.menu} />
        </div>
      </div>
      <div className='mt-4'>
        <ReservationsList item={item?.reservations} />
      </div>
    </>
  )
}

export default ShopDetail
