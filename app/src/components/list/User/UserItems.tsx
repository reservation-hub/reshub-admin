import React from 'react'

import useRole from '@utils/hooks/useRole'
import useBirthday from '@utils/hooks/useBirthday'
import history from '@utils/routes/history'
import { IDetailProps } from '@components/detail/_PropsType'

const UserItems = ({ user }: IDetailProps) => {
  const birthday = useBirthday(user?.birthday)
  const role = useRole(user?.role)
  return (
    <>
      <tr 
        onClick={() => history.push(`/users/${user?.id}`)} 
        className='text-[1.6rem] text-center hover:bg-secondary-dark border-b-2 h-[5rem]'
      >
        <td>{user?.id}</td>
        <td>{user?.email}</td>
        <td>{`${user?.firstNameKanji} ${user?.lastNameKanji}`}</td>
        <td>{`${user?.firstNameKana} ${user?.lastNameKana}`}</td>
        <td>{birthday === 'Invalid Date' ? '-' : birthday}</td>
        <td>{user?.gender ?? '-'}</td>
        <td>{role}</td>
      </tr>
    </>
  )
}

export default React.memo(UserItems)
