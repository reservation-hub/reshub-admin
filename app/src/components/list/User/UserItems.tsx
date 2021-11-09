import React from 'react'

import useRole from '@utils/hooks/useRole'
import useBirthday from '@utils/hooks/useBirthday'
import { TableRow } from '@material-ui/core'
import history from '@utils/routes/history'
import { IDetailProps } from '@components/detail/_PropsType'
import { StyledTableCell } from '../ListStyle'

const UserItems = ({ user }: IDetailProps) => {
  const birthday = useBirthday(user?.birthday)
  const role = useRole(user?.role)

  return (
    <TableRow
      style={{ height: '6rem' }}
      hover
      onClick={() => history.push(`/users/${user?.id}`)}
    >
      <StyledTableCell>{user?.id}</StyledTableCell>
      <StyledTableCell>{user?.email}</StyledTableCell>
      <StyledTableCell>
        {`${user?.firstNameKanji} ${user?.lastNameKanji}`}
      </StyledTableCell>
      <StyledTableCell>
        {`${user?.firstNameKana} ${user?.lastNameKana}`}
      </StyledTableCell>
      <StyledTableCell>
        {birthday === 'Invalid Date' ? '-' : birthday}
      </StyledTableCell>
      <StyledTableCell>{user?.gender ?? '-'}</StyledTableCell>
      <StyledTableCell>{role}</StyledTableCell>
    </TableRow>
  )
}

export default React.memo(UserItems)
