import React from 'react'
import TableLayout from '@components/common/atoms/TableLayout'
import UserItems from './UserItems'
import { USER_CELL } from '@constants/Table'
import { IListProps } from '../_PropsType'
import IsEmpty from '@/components/common/atoms/IsEmpty'

const UserList = ({ users }: IListProps) => {
  return (
    <>
      <TableLayout cell={USER_CELL}>
        {users?.map((value, index) => (
          <UserItems user={value} key={index} />
        ))}
      </TableLayout>
      {users?.length === 0 && <IsEmpty text='ユーザー' />}
    </>
  )
}

export default React.memo(UserList)
