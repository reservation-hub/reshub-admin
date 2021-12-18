import React from 'react'
import MainTemplate from '@components/common/layout/MainTemplate'
import { RouteComponentProps } from 'react-router'

const StaffSalon = ({ location }: RouteComponentProps) => {
  console.log(location)
  return <MainTemplate></MainTemplate>
}

export default StaffSalon
