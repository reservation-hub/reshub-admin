import SubHeader from '@components/common/atoms/SubHeader'
import TableLayout from '@components/common/atoms/TableLayout'
import Section from '@components/common/layout/Section'
import { ClassesAndChildren } from '@components/common/_PropsType'
import { RESERVATION_CELL, SALON_CELL, STYLELIST_CELL } from '@constants/Table'
import { salonIndexShopStaffResponse } from '@utils/api/request-response-types/Dashboard'
import React from 'react'
import SalonItem from '@components/list/shop/SalonItem'
import ReservationItems from '@components/list/reservations/ReservationItems'
import StylistItem from '@components/list/stylist/StylistItem'
import SalonList from '../list/shop/SalonList'
import ReservationsList from '../list/reservations/ReservationList'
import StylistList from '../list/stylist/StylistList'

export interface ShopStaffDashboardProps extends ClassesAndChildren {
  data: salonIndexShopStaffResponse
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
