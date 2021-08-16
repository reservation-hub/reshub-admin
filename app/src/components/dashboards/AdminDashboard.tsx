import React from 'react'

import { SalonCell, UserCell } from '../common/_Constants'
import { Grid } from '@material-ui/core'

import TableLayout from '../common/atoms/TableLayout'
import { AdminDashboardProps } from './_PropsType'


const AdminDashboard = ({
  user,
  shop
}: AdminDashboardProps) => {

  console.log(user, shop)

  return (
    <Grid container>
      <Grid item style={{ width: '100%' }}>
        <TableLayout cell={ UserCell } data={ user } />
      </Grid>
      <Grid item style={{ width: '100%' }}>
        <TableLayout cell={ SalonCell } data={ shop } />
      </Grid>
    </Grid>
  )
}

export default React.memo(AdminDashboard)