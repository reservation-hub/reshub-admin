import React from 'react'
import IsEmpty from '@components/common/atoms/IsEmpty'
import { IListProps } from '@components/list/_PropsType'
import Table from '@components/common/atoms/Table'
import { StylistForList } from '@utils/api/request-response-types/models/Stylist'

const StylistList = ({
  item,
  usePaginate,
  page,
  totalPage,
  pageChangeHandler
}: IListProps) => {
  const rowIems = item?.map((stylist: StylistForList) => ({
    ...stylist,
    price: `${stylist.price.toLocaleString()}¥`
  }))

  return (
    <>
      <Table
        cell={[
          { column: 'スタイリスト名', key: 'name' },
          { column: '指名量', key: 'price' },
          { column: '予約件数', key: 'reservationCount' }
        ]}
        row={rowIems}
        usePaginate={usePaginate}
        page={page}
        totalPage={totalPage}
        pageChangeHandler={pageChangeHandler}
        url='stylist/detail'
        subParams
      />
      {item?.length === 0 && <IsEmpty text='スタイリスト' />}
    </>
  )
}

export default StylistList
