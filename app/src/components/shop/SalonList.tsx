import React from 'react'
import ListTopBar from '../common/atoms/ListTopBar'
import { UserListProps } from '../user/_PropsType'
import TableLayout from '../common/atoms/TableLayout'
import { SalonCell } from '../common/_Constants'
import Body from '../common/atoms/Body'
import SalonItem from './SalonItem'


const SalonList = ({
  shops,
  modalOpenHandler
}: UserListProps) => {
  console.log(shops)
  return (
    <>
      <ListTopBar title='サロン一覧' type='salon' modalOpenHandler={ modalOpenHandler } />
      <TableLayout cell={ SalonCell } data={ shops }>
        { shops?.map((value, index) => (
          <Body key={ index } index={ value.id } data={ shops }>
            <SalonItem shop={ value } />
          </Body>
        )) }
      </TableLayout>
    </>
  )
}
export default SalonList
