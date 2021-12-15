import React from 'react'
import { IDetailProps } from '@components/detail/_PropsType'
import TableRow from '@components/common/atoms/TableRow'

const UserItems = ({ user }: IDetailProps) => {
  return (
    <TableRow url='users' id={user?.id}>
      <td>{user?.id}</td>
      <td>{user?.email}</td>
      <td>{`${user?.firstNameKana} ${user?.lastNameKana}`}</td>
      <td>{user?.role?.name}</td>
    </TableRow>
  )
}

export default React.memo(UserItems)
