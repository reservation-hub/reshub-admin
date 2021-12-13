import React from 'react'
import TableLayout from '@components/common/atoms/TableLayout'
import UserItems from './UserItems'
import { USER_CELL } from '@constants/Table'
import { IListProps } from '../_PropsType'

const UserList = ({ users }: IListProps) => {
  return (
    <TableLayout cell={USER_CELL}>
      {users?.map((value, index) => (
        <UserItems user={value} key={index} />
      ))}
    </TableLayout>
  )
}

export default React.memo(UserList)
