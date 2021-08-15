import React from 'react'

import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { User } from '../../../entities/User'

import MainTemplate from '../../../components/common/layout/MainTemplate'
import AdminDashboard from '../../../components/dashboards/AdminDashboard'
import ShopDashboard from '../../../components/dashboards/salon/Shopdashboard'

const SalonDashboard = () => {

  const { user } = useSelector((state:RootState) => state.auth)

  const authCheck = (user: User) => user.roles.findIndex(r => r.name === 'admin') !== -1

  return (
    <MainTemplate>
      { authCheck(user)
        ? <AdminDashboard />
        : <ShopDashboard />
      }
    </MainTemplate>
  )
}

export default SalonDashboard