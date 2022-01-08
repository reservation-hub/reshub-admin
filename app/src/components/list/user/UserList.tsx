import React from 'react'
import TableLayout from '@/components/common/atoms/Table'
import { USER_CELL } from '@constants/Table'
import { IListProps } from '@components/list/_PropsType'
import IsEmpty from '@components/common/atoms/IsEmpty'
import Table from '@/components/common/atoms/Table'

const UserList = ({ item, usePaginate, page, totalPage, pageChangeHandler }: IListProps) => {
  return (
    <>
      <Table 
        cell={[]}
        row={item?.map((i: any) => i)}
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
