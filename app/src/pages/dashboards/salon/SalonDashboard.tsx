import React, { useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchDashboard } from '../../../store/actions/dashboardAction'
import { RootState } from '../../../store/store'
import { User } from '../../../entities/User'

import MainTemplate from '../../../components/common/layout/MainTemplate'
import AdminDashboard from '../../../components/dashboards/AdminDashboard'
import ShopDashboard from '../../../components/dashboards/salon/Shopdashboard'
import Loading from '../../../components/common/atoms/loading'

const SalonDashboard = () => {
  
  const { user, data, loading } = useSelector(
    (state: RootState) => ( {
      user: state.auth['user'],
      data: state.dashboard.data,
      loading: state.dashboard.loading
    } ), shallowEqual
  )
  const dispatch = useDispatch()
  const authCheck = (user: User) => user.roles.findIndex(r => r.name === 'admin') !== -1
  
  useEffect(() => {
    dispatch(fetchDashboard())
  }, [dispatch])
  
  if (loading) return <Loading />
  
  return (
    <MainTemplate>
      { authCheck(user)
        ? <AdminDashboard data={ data } />
        : <ShopDashboard />
      }
    </MainTemplate>
  )
}

export default SalonDashboard