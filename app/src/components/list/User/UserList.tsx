import React from 'react'

import { HeaderType } from '@components/common/_Constants'
import ListTopBar from '@components/common/atoms/ListTopBar'
import TableLayout from '@components/common/atoms/TableLayout'
import UserItems from './UserItems'
import { USER_CELL } from '@constants/Table'
import { IListProps } from '../_PropsType'

const UserList = ({ users, modalOpenHandler }: IListProps) => {
  return (
    <>
      <ListTopBar
        title='ユーザー一覧'
        modalOpenHandler={modalOpenHandler}
        type={HeaderType.LIST}
      />
      <TableLayout cell={USER_CELL} data={users}>
        {users?.map((value, index) => (
          <UserItems user={value} key={index} />
        ))}
      </TableLayout>
    </>
  )
}

export default React.memo(UserList)
