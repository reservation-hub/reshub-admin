import React, { useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchDashboard } from '../../../store/actions/dashboardAction'
import { RootState } from '../../../store/store'
import { User } from '../../../entities/User'

import MainTemplate from '../../../components/common/layout/MainTemplate'
import AdminDashboard from '../../../components/dashboards/AdminDashboard'
import ShopDashboard from '../../../components/dashboards/salon/Shopdashboard'

const SalonDashboard = () => {

  const { user, data } = useSelector(
    (state: RootState) => ({
      user :state.auth['user'],
      data: state.dashboard.data
    }), shallowEqual
  )
  const dispatch = useDispatch()
  const authCheck = (user: User) => user.roles.findIndex(r => r.name === 'admin') !== -1

  useEffect(() => {
    dispatch(fetchDashboard())
  }, [dispatch]);

  return (
    <MainTemplate>
      { authCheck(user)
        ? <AdminDashboard
          user={ data.user && data.user.users }
          shop={ data.shop && data.shop.shopData }
        />
        : <ShopDashboard />
      }
    </MainTemplate>
  )
}

export default SalonDashboard