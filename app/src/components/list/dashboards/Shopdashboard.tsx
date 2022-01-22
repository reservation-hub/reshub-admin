import SubHeader from '@components/common/atoms/SubHeader'
import Section from '@components/common/layout/Section'
import { ClassesAndChildren } from '@components/common/_PropsType'
import React from 'react'
import SalonList from '@components/list/shop/SalonList'
import ReservationsList from '@components/list/reservations/ReservationList'
import StylistList from '@components/list/stylist/StylistList'
import { salonIndexShopStaffResponse } from '@utils/api/request-response-types/Dashboard'

export interface ShopStaffDashboardProps extends ClassesAndChildren {
  data: salonIndexShopStaffResponse
  admin?: boolean
}

const ShopDashboard = ({ data }: ShopStaffDashboardProps) => {
  return (
    <Section>
      <SubHeader text='ダッシュボード' type='dashboard' />
      <div className='flex justify-between'>
        <div className='w-[75rem]'>
          <ReservationsList item={data?.reservations} />
        </div>
        <div className='w-[42.5rem]'>
          <StylistList item={data?.stylists} />
        </div>
      </div>
      <SalonList item={data?.shops} />
    </Section>
  )
}

export default ShopDashboard
