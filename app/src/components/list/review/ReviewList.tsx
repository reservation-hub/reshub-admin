import React from 'react'
import { IListProps } from '@components/list/_PropsType'
import Table from '@components/common/atoms/Table'
import { ReviewForList } from '@utils/api/request-response-types/models/Review'

const ReviewList = ({
  item,
  usePaginate,
  page,
  totalPage,
  pageChangeHandler
}: IListProps) => {
  const rowIems = item?.map((review: ReviewForList) => review)

  return (
    <Table
      cell={[
        { column: 'お名前', key: 'clientName' },
        { column: '評価', key: 'score' },
      ]}
      row={rowIems}
      usePaginate={usePaginate}
      page={page}
      totalPage={totalPage}
      pageChangeHandler={pageChangeHandler}
      url='review/detail'
      subParams
    />
  )
}

export default ReviewList
