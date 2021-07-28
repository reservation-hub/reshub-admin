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
import Modal from '../modal/Modal'

const UserList = ({ users }) => {

  return (
    <Paper>
      <Typography variant='h4'>
        ユーザー一覧
      </Typography>
      <Modal />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              No
            </TableCell>
            <TableCell>
              メールアドレス
            </TableCell>
            <TableCell>
              氏名(漢字)
            </TableCell>
            <TableCell>
              氏名(カナ)
            </TableCell>
            <TableCell>
              生年月日
            </TableCell>
            <TableCell>
              性別
            </TableCell>
            <TableCell>
              アクセス権限
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { users && users.map(
            user => (
              <UserItem
                key={ user.id }
                userId={ user.id }
                userEmail={ user.email }
                kanjiName={ `${user.firstNameKanji} ${user.lastNameKanji}` }
                kanaName={ `${user.firstNameKana} ${user.lastNameKana}` }
                gender={ user.gender }
                role={ user && user.roles.map(r => r.name) }
              />
            )
          ) }
        </TableBody>
      </Table>
    </Paper>
  )

}

export default React.memo(UserList)
