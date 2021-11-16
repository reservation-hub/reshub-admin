import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import history from '@utils/routes/history'
import { IListProps } from '@components/list/_PropsType'
import { StyledTableCell } from '../ListStyle'

const SalonItem = ({ shop }: IListProps) => {
  return (
    <TableRow
      style={{ height: '6rem' }}
      hover
      onClick={() => history.push(`/salon/${shop?.id}`)}
    >
      <StyledTableCell>{shop?.id}</StyledTableCell>
      <StyledTableCell>{shop?.name}</StyledTableCell>
      <StyledTableCell>-</StyledTableCell>
      <StyledTableCell>{shop?.address ?? '-'}</StyledTableCell>
      <StyledTableCell>{`${shop?.reservationCount ?? 0}件`}</StyledTableCell>
      <StyledTableCell>{`${shop?.stylistCount ?? 0}件`}</StyledTableCell>
      <StyledTableCell>{shop?.phoneNumber ?? '-'}</StyledTableCell>
    </TableRow>
  )
}
export default React.memo(SalonItem)
