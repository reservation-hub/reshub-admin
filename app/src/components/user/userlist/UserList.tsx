import React from 'react'

import { UserCell } from '../../common/_Constants'
import { UserListProps } from '../_PropsType'

import ListTopBar from '../../common/atoms/ListTopBar'
import TableLayout from '../../common/atoms/TableLayout'
import Body from '../../common/atoms/Body'
import UserItems from './UserItems'

const UserList = ({
  users,
  modalOpenHandler
}: UserListProps) => {
  
  return (
    <>
      <ListTopBar title='ユーザー一覧' modalOpenHandler={ modalOpenHandler } type='users' />
      <TableLayout cell={ UserCell } data={ users }>
        { users?.map((value, index) => (
          <Body key={ index } index={ value.id } data={ users }>
            <UserItems user={ value } />
          </Body>
        )) }
      </TableLayout>
    </>
  )
  
}

export default UserList
