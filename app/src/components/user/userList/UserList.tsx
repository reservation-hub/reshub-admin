import React from 'react'

import { TableBody, TableRow, TableCell, } from '@material-ui/core'
import TableStyle, { StyledTable, StyledTableHead } from '../../location/TableStyle'
import { StyledPaper } from '../../CommonStyle'
import { User } from '../../../entities/User'

import UserItem from './UserItem'
import ModalOverlay from '../../modal/ModalOverlay'
import ModalUserForm from '../../modal/ModalUserForm'
import ListTopBar from './ListTopBar'


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
  const classes = TableStyle()
  return (
    <StyledPaper elevation={ 0 } >
      <ListTopBar modalOpenHandler={ modalOpenHandler } />
      <StyledTable>
        <StyledTableHead>
          <TableRow>
            <TableCell
              style={{ width: '76px', padding: '0', textAlign: 'center' }}
              className={ classes.tableHeadCell }
            >
              No
            </TableCell>
            <TableCell className={ classes.tableHeadCell }>
              メールアドレス
            </TableCell>
            <TableCell className={ classes.tableHeadCell }>
              氏名(漢字)
            </TableCell>
            <TableCell className={ classes.tableHeadCell }>
              氏名(カナ)
            </TableCell>
            <TableCell className={ classes.tableHeadCell }>
              生年月日
            </TableCell>
            <TableCell className={ classes.tableHeadCell }>
              性別
            </TableCell>
            <TableCell className={ classes.tableHeadCell }>
              アクセス権限
            </TableCell>
          </TableRow>
        </StyledTableHead>
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
                classes={ classes }
              />
            )
          ) }
        </TableBody>
      </StyledTable>
      <ModalOverlay modalOpen={ modalOpen } modalCloseHandler={ modalCloseHandler }>
        <ModalUserForm />
      </ModalOverlay>
    </StyledPaper>
  )

}

export default React.memo(UserList)
