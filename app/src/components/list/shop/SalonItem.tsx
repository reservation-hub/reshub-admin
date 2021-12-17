import React from 'react'
import { IListProps } from '@components/list/_PropsType'
import TableRow from '@components/common/atoms/TableRow'

const SalonItem = ({ shop, admin }: IListProps) => {
  return (
    <TableRow url={admin ? 'salon' : 'shops'} id={shop?.id}>
      <td className='p-4'>{shop?.id}</td>
      <td className='p-4'>{shop?.name}</td>
      <td className='p-4'>-</td>
      <td className='p-4'>
        {`${shop?.prefectureName}${shop?.cityName}${shop?.address ?? ''}` ??
          '-'}
      </td>
      <td className='p-4'>{`${shop?.reservationsCount ?? 0}件`}</td>
      <td className='p-4'>{`${shop?.stylistsCount ?? 0}件`}</td>
      <td className='p-4'>{shop?.phoneNumber ?? '-'}</td>
    </TableRow>
  )
}
export default React.memo(SalonItem)
