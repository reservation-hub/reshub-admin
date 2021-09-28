import React from 'react'
import TableStyle, { StyledTable, StyledTableHead } from '../TableStyle'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { ITableProps } from '../_PropsType'

const TableLayout = ({ children, cell }: ITableProps) => {
  const classes = TableStyle()

  return (
    <StyledTable>
      <StyledTableHead>
        <TableRow style={{ height: '5.5rem' }}>
          {cell &&
            Object.entries(cell).map(
              (value: [string, string], index: number) => (
                <TableCell
                  key={index}
                  className={
                    value[1] === 'No'
                      ? `${classes.tableHeadCell} table-index`
                      : classes.tableHeadCell
                  }
                >
                  {value[1]}
                </TableCell>
              )
            )}
        </TableRow>
      </StyledTableHead>
      <TableBody>{children}</TableBody>
    </StyledTable>
  )
}

export default React.memo(TableLayout)
