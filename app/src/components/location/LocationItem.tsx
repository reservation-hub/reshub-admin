import React from 'react'

import { TableRow, TableCell } from '@material-ui/core'

interface lcItemProps {
  locationNo: number,
  locationName: string,
  classes: any
}

const LocationItem = ({
  locationNo,
  locationName,
  classes
}: lcItemProps) => {

  return (
    <TableRow>
      <TableCell
        style={{ width: '76px', padding: '0', textAlign: 'center' }}
        className={ classes.tableBodyCell }
      >
        { locationNo }
      </TableCell>
      <TableCell className={ classes.tableBodyCell } >
        { locationName }
      </TableCell>
    </TableRow>
  )
}

export default React.memo(LocationItem)
