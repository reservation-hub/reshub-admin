import React from 'react'

import { SalonCell, UserCell } from '../common/_Constants'
import { Grid } from '@material-ui/core'
import { AdminDashboardProps } from './_PropsType'

import TableLayout from '../common/atoms/TableLayout'
import UserItems from '../user/userList/items'
import Body from '../common/atoms/Body'
import H1 from '../common/atoms/H1'

const AdminDashboard = ({
	data
}: AdminDashboardProps) => {

	return (
		<Grid container>
			<H1 color='primary'>ダッシュボード</H1>
			<Grid item style={ { width: '100%' } }>
				<TableLayout cell={ UserCell }>
					{ data?.user?.users.map((value, index) => (
						<Body data={ data?.user?.users } key={ index }>
							<UserItems user={ value } />
						</Body>
					)) }
				</TableLayout>
			</Grid>
			<Grid item style={ { width: '100%' } }>
				<TableLayout cell={ SalonCell } />
				{/* TODO サロンページ待ち	*/ }
			</Grid>
		</Grid>
	)

}

export default AdminDashboard