import React from 'react'
import { TableCell, TableRow } from '@material-ui/core'
import { BodyProps } from '../_PropsType'
import { StyledTableCell } from '../TableStyle'
import { Role } from '../../../entities/Role'
import moment from 'moment'

const Body = ({
  index,
  data
}: BodyProps) => {

  const birthday = moment(
    `${ data.birthday }`, 'YYYY-MM-DD'
  ).format('YYYY-MM-DD')

  return (
    <TableRow style={{ height: '3.75rem' }}>
      <StyledTableCell className='table-index'>
        { index }
      </StyledTableCell>
      <StyledTableCell>
        { data.email || data.name }
      </StyledTableCell>
      <StyledTableCell>
        { `${ data.firstNameKanji } ${ data.lastNameKanji }` || '-' }
      </StyledTableCell>
      <StyledTableCell>
        { `${ data.firstNameKana } ${ data.lastNameKana }` || data.address  }
      </StyledTableCell>
      <StyledTableCell>
        { data.birthday === null ? '-' : birthday || '-'}
      </StyledTableCell>
      <StyledTableCell>
        { data.gender === null ? '-' : data.gender }
      </StyledTableCell>
      <StyledTableCell>
        { data.roles.map((r: Role) => r.name) || data.phoneNumber }
      </StyledTableCell>
    </TableRow>
  )

}

export default Body