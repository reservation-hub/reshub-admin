import React from 'react'

import { HeaderType } from '../../common/_Constants'
import ListTopBar from '../../common/atoms/ListTopBar'
import TableLayout from '../../common/atoms/TableLayout'
import UserItems from './UserItems'
import { UserCell } from '../../../constants/Table'
import { IListProps } from '../_PropsType'

const UserList = ({
  users,
  modalOpenHandler
}: IListProps) => {

  return (
    <>
      <ListTopBar
        title="ユーザー一覧"
        modalOpenHandler={ modalOpenHandler }
        type={ HeaderType.LIST }
      />
      <TableLayout cell={ UserCell } data={ users }>
        { users?.map((value, index) => (
          <UserItems user={ value } key={ index }/>
        )) }
      </TableLayout>
    </>
  )

}

export default React.memo(UserList)
