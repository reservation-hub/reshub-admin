import React from 'react'
import { IListProps } from '@components/list/_PropsType'
import IsEmpty from '@components/common/atoms/IsEmpty'
import Table from 'components/common/atoms/Table'
import {
  UserResponse
} from '@utils/api/request-response-types/User'

const UserList = ({
  item,
  usePaginate,
  page,
  totalPage,
  pageChangeHandler
}: IListProps) => {
  type Users = {
    username: string
    kanaName: string
    email: string
    reservationCount: number
    role: string
  }
  const rowItems: Users[] = item?.map((item: UserResponse) => ({
    ...item,
    kanaName: `${item?.firstNameKana} ${item?.lastNameKana}`,
    role: item?.role?.name
  }))

  return (
    <>
      <Table
        cell={[
          { column: 'ユーザー名', key: 'username' },
          { column: 'お名前（カナ）', key: 'kanaName' },
          { column: 'メールアドレス', key: 'email' },
          { column: '予約件数', key: 'reservationCount' },
          { column: '権限', key: 'role' }
        ]}
        row={rowItems}
        url='users'
        usePaginate={usePaginate}
        page={page}
        totalPage={totalPage}
        pageChangeHandler={pageChangeHandler}
      />
      {item?.length === 0 && <IsEmpty text='ユーザー' />}
    </>
  )
}

export default React.memo(UserList)
