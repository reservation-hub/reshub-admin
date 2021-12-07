import React from 'react'
import Grid from '@material-ui/core/Grid'
import { AdminDashboardProps } from './_PropsType'
import TableLayout from '@components/common/atoms/TableLayout'
import UserItems from '@components/list/User/UserItems'
import SalonItem from '@components/list/Shop/SalonItem'
import { SALON_CELL, USER_CELL } from '@constants/Table'
import SubHeader from '@/components/common/atoms/SubHeader'

const AdminDashboard = ({ data }: AdminDashboardProps) => {
  return (
    <Grid container>
      <SubHeader title='ダッシュボード' type='dashboard' />
      <Grid item style={{ width: '100%' }}>
        <TableLayout cell={USER_CELL}>
          {data?.user?.users.map((value, index) => (
            <UserItems user={value} key={index} />
          ))}
        </TableLayout>
      </Grid>
      <Grid item style={{ width: '100%' }}>
        <TableLayout cell={SALON_CELL}>
          {data?.shop?.shopData.map((value, index) => (
            <SalonItem shop={value} key={index} />
          ))}
        </TableLayout>
      </Grid>
    </Grid>
  )
}

export default AdminDashboard
