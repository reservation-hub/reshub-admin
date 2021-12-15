import TableRow from '@/components/common/atoms/TableRow'
import React from 'react'
import { IListProps } from '@components/list/_PropsType'

const MenuItem = ({ menu }: IListProps) => {
  return (
    <TableRow>
      <td>{menu?.name}</td>
      <td>{menu?.price}</td>
      <td>-</td>
    </TableRow>
  )
}

export default MenuItem
