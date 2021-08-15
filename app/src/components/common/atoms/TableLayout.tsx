import React from 'react'

import TableStyle, { StyledTable, StyledTableHead } from '../TableStyle'
import { TableBody, TableCell, TableRow } from '@material-ui/core'
import { TableProps } from '../_PropsType'
import { Shop } from '../../../entities/Shop'
import { User } from '../../../entities/User'

import Body from './Body'

const TableLayout = ({
  cell,
  data
}: TableProps) => {

  const classes = TableStyle()

  return (
    <StyledTable>
      <StyledTableHead>
        <TableRow style={{ height: '5.5rem' }}>
          { cell && Object.values(cell).map(
            (value) => (
                <TableCell
                  key={ value.key }
                  className={ value.key === 1
                    ? `${ classes.tableHeadCell } table-index`
                    : classes.tableHeadCell
                  }
                >
                  { value.value }
                </TableCell>
              )
          ) }
        </TableRow>
      </StyledTableHead>
      <TableBody>
        { data && Object.values(data).map(
          (data: User & Shop, index: number) => (
            <Body key={ index } index={ data.id } data={ data } />
          )
        ) }
      </TableBody>
    </StyledTable>
  )

}

export default TableLayout