import React from 'react'
import { IListProps } from '@components/list/_PropsType'
import Table from '@components/common/atoms/Table'
import { TagResponse } from '@utils/api/request-response-types/Tag'

const TagList = ({
  item,
  usePaginate,
  page,
  totalPage,
  pageChangeHandler
}: IListProps) => {
  const rowItems = item?.map((item: TagResponse) => item)
  const onClick = () => null
  return (
    <Table
      cell={[{ column: 'タグ', key: 'slug' }]}
      row={rowItems}
      usePaginate={usePaginate}
      page={page}
      totalPage={totalPage}
      pageChangeHandler={pageChangeHandler}
      onClick={onClick}
      classes={'w-1/2 mx-auto'}
    />
  )
}

export default React.memo(TagList)
