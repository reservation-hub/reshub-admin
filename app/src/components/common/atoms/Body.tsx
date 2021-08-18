import React from 'react'

import { TableRow } from '@material-ui/core'
import { User } from '../../../entities/User'
import { Shop } from '../../../entities/Shop'
import { DashboardShop } from '../../../store/types/dashboardTypes'
import { TableProps } from '../_PropsType'

import history from '../../../utils/history'

const Body = ({
	children,
	index,
	data
}: TableProps) => {

	const userMail = data?.map((u: User) => u.email)
	const salonName = data?.map((s: DashboardShop) => s.name)

	// Todo 今は if else　で処理しているが、未来には　switch　で処理する
	const linkPage = (data: User[] | DashboardShop[] | Shop[] | undefined) => {
		if (userMail && index !== undefined) {
			return history.push(`/users/${ index }`)
		} else if (salonName && index !== undefined) return history.push(`/shop/${ index }`)
		return history.push('/error')
	}

	return (
		<TableRow
			style={ { height: '6rem' } }
			hover
			onClick={ () => linkPage(data) }
		>
			{ children }
		</TableRow>
	)

}

export default Body

