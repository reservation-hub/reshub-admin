import React from 'react'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { ITableProps } from '../_PropsType'
import { Theme, withStyles } from '@material-ui/core/styles'

export const StyledTable = withStyles((theme: Theme) => ({
  root: {
    width: '100%',
    background: theme.palette.secondary.main
  }
}))(Table)

export const StyledTableHead = withStyles((theme: Theme) => ({
  root: {
    background: theme.palette.adTheadColor.main
  }
}))(TableHead)

export const StyledTableCell = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.adThFontColor.main,
    fontWeight: 'bold',
    fontSize: '1.8rem',
    textAlign: 'center'
  }
}))(TableCell)

const TableLayout = ({ children, cell }: ITableProps) => {
  return (
    <StyledTable>
      <StyledTableHead>
        <TableRow style={{ height: '5.5rem' }}>
          {cell &&
            Object.values(cell).map((value, index: number) => (
              <StyledTableCell key={index}>{value}</StyledTableCell>
            ))}
        </TableRow>
      </StyledTableHead>
      <TableBody>{children}</TableBody>
    </StyledTable>
  )
}

export default React.memo(TableLayout)
