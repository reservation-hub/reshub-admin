import React from 'react'
import TableLayout from '@components/common/atoms/TableLayout'
import UserItems from '@/components/list/user/UserItems'
import SalonItem from '@/components/list/shop/SalonItem'
import { SALON_CELL, USER_CELL } from '@constants/Table'
import SubHeader from '@components/common/atoms/SubHeader'
import Section from '@components/common/layout/Section'
import { salonIndexAdminResponse } from '@/utils/api/request-response-types/Dashboard'
import { User } from '@/entities/User'
import { Shop } from '@/entities/Shop'
import SalonList from '../list/shop/SalonList'

export type AdminDashboardProps = {
  data: salonIndexAdminResponse
}

const AdminDashboard = ({ data }: AdminDashboardProps) => {
  return (
    <Section>
      <SubHeader title='ダッシュボード' type='dashboard'>
        <div className='text-[1.6rem]'>ユーザー{data.user?.totalCount}件</div>
        <div className='text-[1.6rem]'>サロン {data.shop?.totalCount}件</div>
      </SubHeader>
      <TableLayout cell={USER_CELL}>
        {data?.user?.users.map((value: User, index: number) => (
          <UserItems user={value} key={index} />
        ))}
      </TableLayout>
      <SalonList shops={data.shop?.shopData} />
    </Section>
  )
}

export default AdminDashboard
