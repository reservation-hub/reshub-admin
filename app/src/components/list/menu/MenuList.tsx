import React from 'react'
import { IListProps } from '@components/list/_PropsType'
import Table from '@components/common/atoms/Table'
import { MenuForList } from '@utils/api/request-response-types/models/Menu'

const MenuList = ({
  item,
  usePaginate,
  page,
  totalPage,
  pageChangeHandler
}: IListProps) => {
  const rowItems = item?.map((menu: MenuForList) => ({
    ...menu,
    price: `${menu.price.toLocaleString()}¥`,
    duration: `${menu.duration}分`
  }))

  return (
    <Table
      cell={[
        { column: 'メニュー名', key: 'name' },
        { column: '値段', key: 'price' },
        { column: '時間', key: 'duration' }
      ]}
      row={rowItems}
      usePaginate={usePaginate}
      page={page}
      totalPage={totalPage}
      pageChangeHandler={pageChangeHandler}
      url='menu/detail'
      subParams
    />
  )
}

export default MenuList
