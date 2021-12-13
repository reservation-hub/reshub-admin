import React from 'react'
import { IListProps } from '@components/list/_PropsType'
import TableRow from '@/components/common/atoms/TableRow'

const SalonItem = ({ shop, admin }: IListProps) => {
  return (
    <TableRow url={admin ? 'salon' : 'shops'} id={shop?.id}>
      <td>{shop?.id}</td>
      <td>{shop?.name}</td>
      <td>-</td>
      <td>{shop?.address ?? '-'}</td>
      <td>{`${
        shop?.reservationsCount
          ? shop?.reservationsCount
          : shop?.reservations?.length ?? 0
      }件`}</td>
      <td>{`${shop?.stylists?.length ?? 0}件`}</td>
      <td>{shop?.phoneNumber ?? '-'}</td>
    </TableRow>
  )
}
export default React.memo(SalonItem)
