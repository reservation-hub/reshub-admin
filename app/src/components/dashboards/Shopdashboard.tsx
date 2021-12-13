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

export interface ShopStaffDashboardProps extends ClassesAndChildren {
  data: salonIndexShopStaffResponse
}

const ShopDashboard = ({ data }: ShopStaffDashboardProps) => {
  return (
    <Section>
      <SubHeader title='ダッシュボード' type='dashboard' />
      <div className='flex justify-between'>
        <div className='w-[57rem]'>
          <TableLayout cell={RESERVATION_CELL}>
            {data.reservations?.map((value, index) => (
              <ReservationItems reservation={value} key={index} />
            ))}
          </TableLayout>
        </div>
        <div className='w-[50rem]'>
          <TableLayout cell={STYLELIST_CELL}>
            {data.stylists?.map((value, index) => (
              <StylistItem stylist={value} key={index} />
            ))}
          </TableLayout>
        </div>
      </div>
      <TableLayout cell={SALON_CELL}>
        {data?.shops?.map((value, index) => (
          <SalonItem key={index} shop={value} />
        ))}
      </TableLayout>
    </Section>
  )
}

export default ShopDashboard
