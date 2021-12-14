import React from 'react'
import SubHeader from '@components/common/atoms/SubHeader'
import Section from '@components/common/layout/Section'
import SalonList from '@components/list/shop/SalonList'
import UserList from '@components/list/user/UserList'
import { TAdminDashboard } from '@/model/Dashboard'

export type AdminDashboardProps = {
  data: TAdminDashboard
}

const AdminDashboard = ({ data }: AdminDashboardProps) => {
  return (
    <Section>
      <SubHeader title='ダッシュボード' type='dashboard'>
        <div className='text-[1.6rem]'>ユーザー{data.user?.totalCount}件</div>
        <div className='text-[1.6rem]'>サロン {data.shop?.totalCount}件</div>
      </SubHeader>
      <UserList users={data.user?.users} />
      <SalonList shops={data.shop?.shops} admin />
    </Section>
  )
}

export default AdminDashboard
