import React from 'react'

import { UserCell } from '../../common/_TableCellType'
import { User } from '../../../entities/User'

import ListTopBar from '../../common/atoms/ListTopBar'
import TableLayout from '../../common/atoms/TableLayout'

interface UserListProps {
  users: User[]
  modalOpenHandler: () => void
}

const UserList = ({
  users,
  modalOpenHandler
}: UserListProps) => {

  return (
    <React.Fragment>
      <ListTopBar title='ユーザー一覧' modalOpenHandler={ modalOpenHandler } />
      <TableLayout cell={ UserCell } data={ users } />
    </React.Fragment>
  )

}

export default React.memo(UserList)
