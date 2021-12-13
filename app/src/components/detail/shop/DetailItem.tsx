import React from 'react'
import SubHeader from '@/components/common/atoms/SubHeader'
import { IDetailProps } from '../_PropsType'
import { HEADER_TYPE } from '@constants/Common'
import ShopData from '@components/detail/shop/ShopData'
import CustomButton from '@components/common/atoms/CustomButton'
import history from '@/utils/routes/history'
import Section from '@/components/common/layout/Section'
import StylistList from '@/components/list/stylist/StylistList'
import ReservationsList from '@/components/list/reservations/ReservationList'

const DetailItem = ({
  shop,
  stylist,
  reservation,
  modalOpenHandler,
  subModalHandler
}: IDetailProps) => {
  return (
    <Section>
      <SubHeader
        title={`${shop?.name}の詳細`}
        type={HEADER_TYPE.DETAIL}
        modalOpenHandler={modalOpenHandler}
        subModalHandler={subModalHandler}
      >
        <CustomButton onClick={history.goBack}>戻る</CustomButton>
      </SubHeader>
      <div className='container flex justify-between'>
        <ShopData shop={shop} />
        <div className='w-[50rem] h-full'>
          <StylistList stylists={stylist} />
        </div>
      </div>
      <div className='mt-4'>
        <ReservationsList reservations={reservation} />
      </div>
    </Section>
  )
}

export default DetailItem
