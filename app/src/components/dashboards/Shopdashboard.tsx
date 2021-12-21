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
      <SubHeader title='ダッシュボード' type='dashboard' />
      <div className='flex justify-between'>
        <div className='w-[71rem]'>
          <ReservationsList reservations={data?.reservations} />
        </div>
        <div className='w-[43.5rem]'>
          <StylistList stylists={data?.stylists} />
        </div>
      </div>
      <SalonList shops={data?.shops} />
    </Section>
  )
}

export default ShopDashboard
