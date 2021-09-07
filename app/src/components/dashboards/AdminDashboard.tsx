import React from 'react'

import { SalonCell, UserCell } from '../common/_Constants'
import { Grid } from '@material-ui/core'
import { AdminDashboardProps } from './_PropsType'

import TableLayout from '../common/atoms/TableLayout'
import UserItems from '../user/userlist/UserItems'
import H1 from '../common/atoms/H1'
import SalonItem from '../list/Shop/SalonItem'

const AdminDashboard = ({
  data
}: AdminDashboardProps) => {
  
  return (
    <Grid container>
      <H1 color='primary'>ダッシュボード</H1>
      <Grid item style={ { width: '100%' } }>
        <TableLayout cell={ UserCell }>
          { data?.user?.users.map((value, index) => (
            <UserItems user={ value } key={ index } />
          )) }
        </TableLayout>
      </Grid>
      <Grid item style={ { width: '100%' } }>
        <TableLayout cell={ SalonCell }>
          { data?.shop?.shopData.map((value, index) => (
            <SalonItem shop={ value } key={ index } />
          )) }
        </TableLayout>
      </Grid>
    </Grid>
  )
  
}

export default AdminDashboard