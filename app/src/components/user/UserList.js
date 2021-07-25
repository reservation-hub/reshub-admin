import React from 'react'
import {
  Paper, 
  Table,
  TableHead, 
  TableBody, 
  TableRow,
  TableCell,
  Typography  
} from '@material-ui/core'
import UserItem from './UserItem'

const UserList = ({ users }) => {
  return (
    <Paper>
      <Typography variant='h4'>
        ユーザー一覧
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              No
            </TableCell>
            <TableCell>
              お名前
            </TableCell>
            <TableCell>
              メールアドレス
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { users && users.map(
            (user, index) => (
              <UserItem 
                key={ user.id }
                userId={ user.id }
                userNo={ index }
                userFirstname={ user.firstName }
                userLastname={ user.lastName }
                userEmail={ user.email }
              />
            )
          ) }
        </TableBody>
      </Table>
    </Paper>
  )
}

export default UserList
