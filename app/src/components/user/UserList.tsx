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
import { User } from "../../interface/interface"

import UserItem from './UserItem'
import ModalOverlay from '../modal/Modal'
import ModalUserForm from '../modal/ModalForm'


interface UserListProps {
  users: User[]
  modalOpenHandler: () => void
  modalCloseHandler: () => void
  modalOpen: boolean
}

const UserList = ({
  users,
  modalOpenHandler,
  modalCloseHandler,
  modalOpen
}: UserListProps) => {
  // TODO スタイルを指定
  return (
    <Paper>
      <Typography variant='h4'>
        ユーザー一覧
      </Typography>
      <ModalOverlay
        modalOpen={ modalOpen }
        modalCloseHandler={ modalCloseHandler }
        modalOpenHandler={ modalOpenHandler }
      >
        <ModalUserForm />
      </ModalOverlay>
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
            (user: User) => (
              <UserItem
                key={ user.id }
                userId={ user.id }
                userEmail={ user.email }
                kanjiName={ `${user.firstNameKanji} ${user.lastNameKanji}` }
                kanaName={ `${user.firstNameKana} ${user.lastNameKana}` }
                gender={ user.gender }
                role={ user.roles.map(r => r.name) }
              />
            )
          ) }
        </TableBody>
      </Table>
    </Paper>
  )

}

export default React.memo(UserList)
