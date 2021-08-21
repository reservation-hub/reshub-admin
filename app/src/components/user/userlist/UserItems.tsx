import React from 'react'
import { StyledTableCell } from '../../common/TableStyle'
import { UserListProps } from '../_PropsType'
import birthday from '../../../utils/birthday'

const UserItems = ({ user }: UserListProps) => {
  
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
        { birthday(user?.birthday) === 'Invalid Date'
          ? '-'
          : birthday(user?.birthday)
        }
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
