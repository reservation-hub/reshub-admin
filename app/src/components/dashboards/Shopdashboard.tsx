import SubHeader from '@/components/common/atoms/SubHeader'
import TableLayout from '@/components/common/atoms/TableLayout'
import Section from '@/components/common/layout/Section'
import { ClassesAndChildren } from '@/components/common/_PropsType'
import { RESERVATION_CELL, SALON_CELL, STYLELIST_CELL } from '@/constants/Table'
import { salonIndexShopStaffResponse } from '@/utils/api/request-response-types/Dashboard'
import React from 'react'
import SalonItem from '@components/list/Shop/SalonItem'

export interface ShopStaffDashboardProps extends ClassesAndChildren {
  data: salonIndexShopStaffResponse
}

const ShopDashboard = ({ data }: ShopStaffDashboardProps) => {
  return (
    <Section>
      <SubHeader title='ダッシュボード' type='dashboard' />
      <div className='flex justify-between'>
        <TableLayout cell={RESERVATION_CELL}>ここ予約</TableLayout>
        <TableLayout cell={STYLELIST_CELL}>ここstylist</TableLayout>
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
