import React from 'react'
import { IListProps } from '@components/list/_PropsType'
import IsEmpty from '@components/common/atoms/IsEmpty'
import Table from '@components/common/atoms/Table'
import { ShopForList } from '@/utils/api/request-response-types/models/Shop'

const SalonList = ({
  item,
  admin,
  usePaginate,
  page,
  totalPage,
  pageChangeHandler
}: IListProps) => {
  const rowItems = item?.map((shop: ShopForList) => ({
    ...shop,
    address: `${shop.prefectureName}${shop.cityName}${shop.address || ''}`
  }))

  return (
    <>
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
        url={admin ? 'salon' : 'shops'}
        usePaginate={usePaginate}
        page={page}
        totalPage={totalPage}
        pageChangeHandler={pageChangeHandler}
      />
      {item?.length === 0 && <IsEmpty text='サロン' />}
    </>
  )
}
export default SalonList
