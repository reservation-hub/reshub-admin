import React from 'react'
import SubHeader from '@components/common/atoms/SubHeader'
import Section from '@components/common/layout/Section'
import SalonList from '@components/list/shop/SalonList'
import UserList from '@components/list/user/UserList'
import { salonIndexAdminResponse } from '@utils/api/request-response-types/Dashboard'

export interface AdminDashboardProps {
  data: salonIndexAdminResponse
}

const AdminDashboard = ({ data }: AdminDashboardProps) => {
  return (
    <Section>
      <SubHeader text='ダッシュボード' type='dashboard'>
        <div className='text-[1.6rem]'>ユーザー{data.user?.totalCount}件</div>
        <div className='text-[1.6rem]'>サロン {data.shop?.totalCount}件</div>
      </SubHeader>
      <UserList item={data.user?.users} />
      <SalonList item={data.shop?.shopData} admin />
    </Section>
  )
}

export default AdminDashboard
