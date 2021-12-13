import React from 'react'
import useRole from '@utils/hooks/useRole'
import useBirthday from '@utils/hooks/useBirthday'
import { IDetailProps } from '@components/detail/_PropsType'
import TableRow from '@/components/common/atoms/TableRow'

const UserItems = ({ user }: IDetailProps) => {
  const birthday = useBirthday(user?.birthday)
  const role = useRole(user?.role)
  return (
    <TableRow url='users' id={user?.id}>
      <td>{user?.id}</td>
      <td>{user?.email}</td>
      <td>{`${user?.firstNameKanji} ${user?.lastNameKanji}`}</td>
      <td>{`${user?.firstNameKana} ${user?.lastNameKana}`}</td>
      <td>{birthday === 'Invalid Date' ? '-' : birthday}</td>
      <td>{user?.gender ?? '-'}</td>
      <td>{role}</td>
    </TableRow>
  )
}

export default React.memo(UserItems)
