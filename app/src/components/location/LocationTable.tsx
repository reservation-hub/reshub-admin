import React from 'react'

import {
  TableBody, 
  TableRow,
  TableCell,
  Typography
} from '@material-ui/core'
import LocationStyle, {
  StyledTable,
  StyledTableHead
} from './TableStyle'
import {
  StyledPaper
} from '../CommonStyle'

import LocationItem from './LocationItem'

import { TableColumn } from '../../utils/interface/interface'

interface LocationTable {
  tableTitle: string
  tableColumnIndex: TableColumn
}

const LocationTable = ({
  tableTitle,
  tableColumnIndex,
  tableColumnName,
  data
}) => {

  const classes = LocationStyle()

  return (
    <StyledPaper elevation={ 0 }>
      <Typography
        variant='h4'
        color='primary'
        className={ classes.tableHeader }
      >
        { tableTitle }
      </Typography>
      <StyledTable>
        <StyledTableHead>
          <TableRow>
            <TableCell
              style={{ width: '76px', padding: '0', textAlign: 'center' }}
              className={ classes.tableHeadCell }
            >
              { tableColumnIndex }
            </TableCell>
            <TableCell
              className={ classes.tableHeadCell }
            >
              { tableColumnName }
            </TableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          { data && data.map(
            (data, index) => (
              <LocationItem 
                key={ index }
                locationNo={ data.id }
                locationName={ data.name }
                classes={ classes }
              />
            )
          ) }
        </TableBody>
      </StyledTable>
    </StyledPaper>
  )
}

export default React.memo(LocationTable)