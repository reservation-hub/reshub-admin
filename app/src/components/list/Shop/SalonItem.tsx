import React from 'react'
import history from '@utils/routes/history'
import { IListProps } from '@components/list/_PropsType'

const SalonItem = ({ shop }: IListProps) => {
  return (
    <>
      <tr
        onClick={() => history.push(`/salon/${shop?.id}`)}
        className='text-[1.6rem] text-center hover:bg-secondary-dark border-b-2 h-[5rem]'
      >
        <td>{shop?.id}</td>
        <td>{shop?.name}</td>
        <td>-</td>
        <td>{shop?.address ?? '-'}</td>
        <td>{`${shop?.reservationCount ?? 0}件`}</td>
        <td>{`${shop?.stylistCount ?? 0}件`}</td>
        <td>{shop?.phoneNumber ?? '-'}</td>
      </tr>
    </>
  )
}
export default React.memo(SalonItem)
