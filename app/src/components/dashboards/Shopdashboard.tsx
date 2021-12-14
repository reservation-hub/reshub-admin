import SubHeader from '@components/common/atoms/SubHeader'
import Section from '@components/common/layout/Section'
import { ClassesAndChildren } from '@components/common/_PropsType'
import React from 'react'
import SalonList from '../list/shop/SalonList'
import ReservationsList from '../list/reservations/ReservationList'
import StylistList from '../list/stylist/StylistList'
import { TStaffDashbaord } from '@/model/Dashboard'

export interface ShopStaffDashboardProps extends ClassesAndChildren {
  data: TStaffDashbaord
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
          {/* <StylistList stylists={data?.stylists} /> */}
        </div>
      </div>
      <SalonList shops={data?.shops} />
    </Section>
  )
}

export default ShopDashboard
