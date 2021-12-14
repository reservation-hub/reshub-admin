import TableLayout from '@/components/common/atoms/TableLayout'
import { MENU_CELL } from '@/constants/Table'
import React from 'react'
import { IListProps } from '../_PropsType'
import MenuItem from './MenuItems'

const MenuList = ({ menus }: IListProps) => {
  return (
    <TableLayout cell={MENU_CELL}>
      {menus?.map((value, index) => (
        <MenuItem key={index} menu={value} />
      ))}
    </TableLayout>
  )
}

export default MenuList
