import React from 'react'
import { StyledTableCell } from '../../common/TableStyle'
import { TableRow } from '@material-ui/core'
import history from '../../../utils/history'
import { IDetailProps } from '../../detail/_PropsType'

const SalonItem = ({ shop }: IDetailProps) => {

  return (
    <TableRow
      style={ { height: '6rem' } }
      hover
      onClick={ () => history.push(`/salon/${ shop?.id }`) }
    >
      <StyledTableCell>
        { shop?.id }
      </StyledTableCell>
      <StyledTableCell>
        { shop?.name }
      </StyledTableCell>
      <StyledTableCell>
        -
      </StyledTableCell>
      <StyledTableCell>
        { shop?.address ?? '-' }
      </StyledTableCell>
      <StyledTableCell>
        { shop?.reservationCount ?? 0 }
      </StyledTableCell>
      <StyledTableCell>
        { shop?.stylistCount ?? 0 }
      </StyledTableCell>
      <StyledTableCell>
        { shop?.phoneNumber ?? '-' }
      </StyledTableCell>
    </TableRow>
  )

}
export default React.memo(SalonItem)