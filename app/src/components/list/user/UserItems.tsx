import React from 'react'
import TableRow from '@components/common/atoms/TableRow'
import { IListProps } from '@components/list/_PropsType'

const UserItems = ({ user }: IListProps) => {
  return (
    <TableRow url='users' id={user?.id}>
      <td className='p-4'>{user?.id}</td>
      <td className='p-4'>{user?.email}</td>
      <td className='p-4'>{user?.username ?? ''}</td>
      <td className='p-4'>{`${user?.firstNameKana} ${user?.lastNameKana}`}</td>
      <td className='p-4'>0件</td>
      <td className='p-4'>{user?.role?.name}</td>
    </TableRow>
  )
}

export default React.memo(UserItems)
