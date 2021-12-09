import SubHeader from '@/components/common/atoms/SubHeader'
import TableLayout from '@/components/common/atoms/TableLayout'
import Section from '@/components/common/layout/Section'
import { ClassesAndChildren } from '@/components/common/_PropsType'
import { STYLELIST_CELL } from '@/constants/Table'
import { salonIndexShopStaffResponse } from '@/utils/api/request-response-types/Dashboard'
import React from 'react'

export interface ShopStaffDashboardProps extends ClassesAndChildren {
  data: salonIndexShopStaffResponse
}

const ShopDashboard = ({ data }: ShopStaffDashboardProps) => {
  return (
    <Section>
      <SubHeader title='ダッシュボード' type='dashboard' />
      <div className='flex justify-between'>
        <TableLayout>ここ予約</TableLayout>
        <TableLayout>ここお店</TableLayout>
      </div>
      <TableLayout cell={STYLELIST_CELL}>
        {data?.stylists?.map((value, index) => (
          <div key={index}>{value.name}</div>
        ))}
      </TableLayout>
    </Section>
  )
}

export default ShopDashboard
