import TableRow from '@components/common/atoms/TableRow'
import React from 'react'
import { IListProps } from '@components/list/_PropsType'

const MenuItem = ({ menu }: IListProps) => {
  return (
    <TableRow>
      <td className='p-4'>{menu?.name}</td>
      <td className='p-4'>{menu?.price}</td>
      <td className='p-4'>{menu?.duration}分</td>
    </TableRow>
  )
}

export default MenuItem
