import React from 'react'
import { StyledTableCell } from '../../common/TableStyle'
import { UserListProps } from '../_PropsType'
import dayjs from 'dayjs'

const UserItems = ({ user }: UserListProps) => {

	const birthday = dayjs(
		`${ user?.birthday }`, 'YYYY-MM-DD'
	).format('YYYY-MM-DD')

	const role = user?.roles.map(r => r.name)

	return (
		<>
			<StyledTableCell>
				{ user?.id }
			</StyledTableCell>
			<StyledTableCell>
				{ user?.email }
			</StyledTableCell>
			<StyledTableCell>
				{ `${ user?.firstNameKanji } ${ user?.lastNameKanji }` }
			</StyledTableCell>
			<StyledTableCell>
				{ `${ user?.firstNameKana } ${ user?.lastNameKana }` }
			</StyledTableCell>
			<StyledTableCell>
				{ birthday === 'Invalid Date' ? '-' : birthday }
			</StyledTableCell>
			<StyledTableCell>
				{ user?.gender ?? '-' }
			</StyledTableCell>
			<StyledTableCell>
				{ role }
			</StyledTableCell>
		</>
	)
}

export default React.memo(UserItems)
