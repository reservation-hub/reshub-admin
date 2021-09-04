import React from 'react'

import { HeaderType, UserCell } from '../../common/_Constants'
import { UserListProps } from '../_PropsType'

import ListTopBar from '../../common/atoms/ListTopBar'
import TableLayout from '../../common/atoms/TableLayout'
import UserItems from './UserItems'

const UserList = ({
  users,
  modalOpenHandler
}: UserListProps) => {
  
  return (
    <>
      <ListTopBar
        title='ユーザー一覧'
        modalOpenHandler={ modalOpenHandler }
        type={ HeaderType.LIST }
      />
      <TableLayout cell={ UserCell } data={ users }>
        { users?.map((value, index) => (
          <UserItems user={ value } key={ index } />
        )) }
      </TableLayout>
    </>
  )
  
}

export default UserList
