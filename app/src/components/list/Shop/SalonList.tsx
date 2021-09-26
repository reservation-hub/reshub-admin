import React from 'react'
import ListTopBar from '../../common/atoms/ListTopBar'
import TableLayout from '../../common/atoms/TableLayout'
import { HeaderType } from '../../common/_Constants'
import SalonItem from './SalonItem'
import { SalonCell } from '../../../constants/Table'
import { IListProps } from '../_PropsType'

const SalonList = ({
  shops,
  modalOpenHandler
}: IListProps) => {

  return (
    <>
      <ListTopBar
        title="サロン一覧"
        type={ HeaderType.LIST }
        modalOpenHandler={ modalOpenHandler }
      />
      <TableLayout cell={ SalonCell } data={ shops }>
        { shops?.map((value, index) => (
          <SalonItem shop={ value } key={ index }/>
        )) }
      </TableLayout>
    </>
  )
}
export default SalonList
