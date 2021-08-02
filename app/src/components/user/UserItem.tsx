import React from 'react'

import {
  TableRow,
  TableCell  
} from '@material-ui/core'
import { Link } from 'react-router-dom'

interface UserItemProps {
  userId: number,
  userEmail: string
  kanjiName: string
  kanaName: string
  gender: string
  role: string
}

const UserItem = ({
  userId,
  userEmail,
  kanjiName,
  kanaName,
  gender,
  role
}: UserItemProps) => {
  // TODO スタイルを指定
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
