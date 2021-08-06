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
  role: string | string[]
  classes: any
}

const UserItem = ({
  userId,
  userEmail,
  kanjiName,
  kanaName,
  gender,
  role,
  classes
}: UserItemProps) => {
  // TODO スタイルを指定
  return (
    <TableRow>
      <TableCell
        style={{ width: '76px', padding: '0', textAlign: 'center' }}
        className={ classes.tableBodyCell }
      >
        { userId }
      </TableCell>
      <TableCell className={ classes.tableBodyCell } >
        <Link to={ `/users/${ userId }` }>
          { userEmail }
        </Link>
      </TableCell>
      <TableCell className={ classes.tableBodyCell } >
        { kanjiName }
      </TableCell>
      <TableCell className={ classes.tableBodyCell } >
        { kanaName }
      </TableCell>
      <TableCell className={ classes.tableBodyCell } >
        {  }
      </TableCell>
      <TableCell className={ classes.tableBodyCell } >
        { gender }
      </TableCell>
      <TableCell className={ classes.tableBodyCell } >
        { role }
      </TableCell>
    </TableRow>
  )

}

export default React.memo(UserItem)
