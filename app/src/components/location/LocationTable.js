import React from 'react'

import {
  Table,
  TableHead, 
  TableBody, 
  TableRow,
  TableCell,
  Typography
} from '@material-ui/core'
import { StyledPaper } from '../CommonStyle'

import LocationItem from './LocationItem'

const LocationTable = ({
  tableTitle,
  tableColumnIndex,
  tableColumnName,
  data
}) => {
  return (
    <StyledPaper elevation={ 0 }>
      <Typography variant='h4'>
        { tableTitle }
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              { tableColumnIndex }
            </TableCell>
            <TableCell>
              { tableColumnName }
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { data && data.map(
            (data, index) => (
              <LocationItem 
                key={ index }
                locationNo={ data.id }
                locationName={ data.name }
              />
            )
          ) }
        </TableBody>
      </Table>
    </StyledPaper>
  )
}

export default React.memo(LocationTable)