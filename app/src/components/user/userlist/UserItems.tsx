import React from 'react'

import { StyledTableCell } from '../../common/TableStyle'
import { UserListProps } from '../_PropsType'

import useRole from '../../../utils/useRole'
import useBirthday from '../../../utils/useBirthday'

const UserItems = ({ user }: UserListProps) => {
  
  const birthday = useBirthday(user?.birthday)
  const role = useRole(user?.roles)
  
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
        { birthday === 'Invalid Date'
          ? '-'
          : birthday
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
