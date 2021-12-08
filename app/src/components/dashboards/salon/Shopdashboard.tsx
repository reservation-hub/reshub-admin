import { RootState } from '@/store/store'
import React from 'react'
import { useSelector } from 'react-redux'

const ShopDashboard = () => {
  const { user } = useSelector((state: RootState) => state.auth)
  console.log(user)
  return (
    <div>
      <span>shop staff dashboard</span>
    </div>
  )
}

export default ShopDashboard
