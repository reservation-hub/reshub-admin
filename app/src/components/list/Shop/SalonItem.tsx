import React from 'react'
import history from '@utils/routes/history'
import { IListProps } from '@components/list/_PropsType'
import TableRow from '@/components/common/atoms/TableRow'

const SalonItem = ({ shop }: IListProps) => {
  return (
    <TableRow
      url='salon'
      id={shop?.id}
    >
      <td>{shop?.id}</td>
      <td>{shop?.name}</td>
      <td>-</td>
      <td>{shop?.address ?? '-'}</td>
      <td>{`${shop?.reservations?.length ?? 0}件`}</td>
      <td>{`${shop?.stylists?.length ?? 0}件`}</td>
      <td>{shop?.phoneNumber ?? '-'}</td>
    </TableRow>
  )
}
export default React.memo(SalonItem)
