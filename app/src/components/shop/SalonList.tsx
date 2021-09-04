import React from 'react'
import ListTopBar from '../common/atoms/ListTopBar'
import { UserListProps } from '../user/_PropsType'
import TableLayout from '../common/atoms/TableLayout'
import { HeaderType, SalonCell } from '../common/_Constants'
import SalonItem from './SalonItem'

const SalonList = ({
  shops,
  modalOpenHandler
}: UserListProps) => {
  
  return (
    <>
      <ListTopBar
        title='サロン一覧'
        type={ HeaderType.LIST }
        modalOpenHandler={ modalOpenHandler }
      />
      <TableLayout cell={ SalonCell } data={ shops }>
        { shops?.map((value, index) => (
          <SalonItem shop={ value } key={ index } />
        )) }
      </TableLayout>
    </>
  )
}
export default SalonList
