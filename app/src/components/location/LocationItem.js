import React from 'react'

import { 
  TableRow,
  TableCell  
} from '@material-ui/core'

const LocationItem = ({
  locationNo,
  locationName
}) => {
  return (
    <TableRow>
      <TableCell>
        { locationNo }
      </TableCell>
      <TableCell>
        { locationName }
      </TableCell>
    </TableRow>
  )
}

export default React.memo(LocationItem)
