import React from 'react'
import SubHeader from '@components/common/atoms/SubHeader'
import TableLayout from '@components/common/atoms/TableLayout'
import UserItems from './UserItems'
import { USER_CELL } from '@constants/Table'
import { IListProps } from '../_PropsType'
import { HEADER_TYPE } from '@constants/Common'
import CustomButton from '@components/common/atoms/CustomButton'
import InputFiled from '@components/common/atoms/InputFiled'

const UserList = ({ users, modalOpenHandler, order, correct }: IListProps) => {
  return (
    <>
      <SubHeader
        title='ユーザー一覧'
        modalOpenHandler={modalOpenHandler}
        type={HEADER_TYPE.LIST}
      >
        <InputFiled />
        <CustomButton classes='ml-2' onClick={() => order && order(!correct)}>
          並び替え
        </CustomButton>
      </SubHeader>
      <TableLayout cell={USER_CELL}>
        {users?.map((value, index) => (
          <UserItems user={value} key={index} />
        ))}
      </TableLayout>
    </>
  )
}

export default React.memo(UserList)
