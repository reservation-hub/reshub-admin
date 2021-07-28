import React from 'react'

import {
  TableRow,
  TableCell  
} from '@material-ui/core'
import { Link } from 'react-router-dom'

const UserItem = ({
  userId,
  userEmail,
  kanjiName,
  kanaName,
  gender,
  role
}) => {

  return (
    <TableRow>
      <TableCell>
        { userId }
      </TableCell>
      <TableCell>
        <Link to={ `/users/${ userId }` }>
          { userEmail }
        </Link>
      </TableCell>
      <TableCell>
        { kanjiName }
      </TableCell>
      <TableCell>
        { kanaName }
      </TableCell>
      <TableCell>
        {  }
      </TableCell>
      <TableCell>
        { gender }
      </TableCell>
      <TableCell>
        { role }
      </TableCell>
    </TableRow>
  )

}

export default React.memo(UserItem)
