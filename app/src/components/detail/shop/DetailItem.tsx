import React from 'react'
import SubHeader from '@components/common/atoms/SubHeader'
import { IDetailProps } from '@components/detail/_PropsType'
import { HEADER_TYPE } from '@constants/Common'
import ShopData from '@components/detail/shop/ShopData'
import CustomButton from '@components/common/atoms/CustomButton'
import history from '@utils/routes/history'
import Section from '@components/common/layout/Section'
import StylistList from '@components/list/stylist/StylistList'
import ReservationsList from '@components/list/reservations/ReservationList'
import MenuList from '@components/list/menu/MenuList'

const DetailItem = ({
  shop,
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
        <div className='w-[34rem] h-full'>
          <StylistList item={shop?.stylists} />
        </div>
        <div className='w-[34rem]'>
          <MenuList item={shop?.menu} />
        </div>
      </div>
      <div className='mt-4'>
        <ReservationsList item={shop?.reservations} />
      </div>
    </Section>
  )
}

export default DetailItem
