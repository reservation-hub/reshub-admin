import React from 'react'

import {
  TableBody, 
  TableRow,
  TableCell,
  Typography
} from '@material-ui/core'
import {
  Area,
  City,
  Prefecture
} from '../../entities/Location'
import LocationStyle, {
  StyledTable,
  StyledTableHead
} from '../common/TableStyle'
import { StyledPaper } from '../CommonStyle'

import LocationItem from './LocationItem'


interface LocationTableProps {
  tableTitle: string
  tableColumnIndex: string
  tableColumnName: string
  data: Area[] | Prefecture[] | City[]
}

const LocationTable = ({
  tableTitle,
  tableColumnIndex,
  tableColumnName,
  data
}: LocationTableProps) => {

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
            <TableCell className={ classes.tableHeadCell } >
              { tableColumnName }
            </TableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          { data && data.map((
            data, index: number) => (
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