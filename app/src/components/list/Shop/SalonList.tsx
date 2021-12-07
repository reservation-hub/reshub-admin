import React from 'react'
import SubHeader from '@/components/common/atoms/SubHeader'
import TableLayout from '@components/common/atoms/TableLayout'
import SalonItem from './SalonItem'
import { IListProps } from '../_PropsType'
import { SALON_CELL } from '@constants/Table'
import { HEADER_TYPE } from '@constants/Common'
import CustomButton from '@components/common/atoms/CustomButton'
import Input from '@/components/common/atoms/input'

const SalonList = ({ shops, modalOpenHandler, order, correct }: IListProps) => {
  return (
    <>
      <SubHeader
        title='サロン一覧'
        type={HEADER_TYPE.LIST}
        modalOpenHandler={modalOpenHandler}
      >
        <Input />
        <CustomButton classes='ml-2' onClick={() => order && order(!correct)}>
          並び替え
        </CustomButton>
      </SubHeader>
      <TableLayout cell={SALON_CELL}>
        {shops?.map((value, index) => (
          <SalonItem shop={value} key={index} />
        ))}
      </TableLayout>
    </>
  )
}
export default SalonList
