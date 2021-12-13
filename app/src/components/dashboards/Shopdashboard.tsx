import SubHeader from '@components/common/atoms/SubHeader'
import Section from '@components/common/layout/Section'
import { ClassesAndChildren } from '@components/common/_PropsType'
import { salonIndexShopStaffResponse } from '@utils/api/request-response-types/Dashboard'
import React from 'react'
import SalonList from '../list/shop/SalonList'
import ReservationsList from '../list/reservations/ReservationList'
import StylistList from '../list/stylist/StylistList'

export interface ShopStaffDashboardProps extends ClassesAndChildren {
  data: salonIndexShopStaffResponse
  admin?: boolean
}

const ShopDashboard = ({ data }: ShopStaffDashboardProps) => {
  return (
    <Section>
      <SubHeader title='ダッシュボード' type='dashboard' />
      <div className='flex justify-between'>
        <div className='w-[57rem]'>
          <ReservationsList reservations={data?.reservations} />
        </div>
        <div className='w-[50rem]'>
          <StylistList stylists={data?.stylists} />
        </div>
      </div>
      <SalonList shops={data?.shops} />
    </Section>
  )
}

export default ShopDashboard
