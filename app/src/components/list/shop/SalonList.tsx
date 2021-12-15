import React from 'react'
import TableLayout from '@components/common/atoms/TableLayout'
import SalonItem from './SalonItem'
import { IListProps } from '@components/list/_PropsType'
import { SALON_CELL } from '@constants/Table'
import IsEmpty from '@components/common/atoms/IsEmpty'

const SalonList = ({ shops, admin }: IListProps) => {
  return (
    <>
      <TableLayout cell={SALON_CELL}>
        {shops?.map((value: any, index) => (
          <SalonItem shop={value} key={index} admin={admin} />
        ))}
      </TableLayout>
      {shops?.length === 0 && <IsEmpty text='サロン' />}
    </>
  )
}
export default SalonList
