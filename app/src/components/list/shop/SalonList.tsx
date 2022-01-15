import React from 'react'
import { IListProps } from '@components/list/_PropsType'
import Table from '@components/common/atoms/Table'
import { ShopForList } from '@utils/api/request-response-types/models/Shop'

const SalonList = ({
  item,
  admin,
  usePaginate,
  page,
  totalPage,
  pageChangeHandler
}: IListProps) => {
  const rowItems: ShopForList[] = item?.map((shop: ShopForList) => ({
    ...shop,
    address: `${shop.prefectureName}${shop.cityName}${shop.address || ''}`
  }))

  return (
    <Table
      cell={[
        { column: 'サロン名', key: 'name' },
        { column: '評点', key: 'stars' },
        { column: '住所', key: 'address' },
        { column: '予約件数', key: 'reservationsCount' },
        { column: '登録スタイリスト数', key: 'stylistsCount' },
        { column: '電話番号', key: 'phoneNumber' }
      ]}
      row={rowItems}
      url={admin ? 'salon/detail' : 'shops/detail'}
      usePaginate={usePaginate}
      page={page}
      totalPage={totalPage}
      pageChangeHandler={pageChangeHandler}
    />
  )
}
export default SalonList
