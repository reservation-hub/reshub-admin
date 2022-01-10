import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import SubHeader from '@components/common/atoms/SubHeader'
import { IDetailProps } from '@components/detail/_PropsType'
import { HEADER_TYPE } from '@constants/Common'
import Section from '@components/common/layout/Section'
import DataTable from '@components/common/atoms/DataTable'
import { UserResponse } from '@utils/api/request-response-types/User'

const UserDetail = ({
  item,
  modalOpenHandler,
  subModalHandler
}: IDetailProps) => {
  type UserDetail = UserResponse & {
    kanaName: string
    reservationCount: string
  }

  const data = {
    ...item,
    kanaName: `${item?.firstNameKana} ${item?.lastNameKana}`,
    role: item?.role.name,
    reservationCount: `${item?.reservationCount}件`
  } as UserDetail

  return (
    <Section>
      <SubHeader
        title='ユーザー詳細'
        type={HEADER_TYPE.DETAIL}
        modalOpenHandler={modalOpenHandler}
        subModalHandler={subModalHandler}
      />
      <div className='w-[55rem]'>
        <FaRegUserCircle className='w-[10rem] h-[10rem] mx-auto my-4' />
      </div>
      <DataTable
        cell={[
          { column: 'メールアドレス', key: 'email' },
          { column: 'ユーザー名', key: 'username' },
          { column: 'お名前（カナ）', key: 'kanaName' },
          { column: '生年月日', key: 'birthday' },
          { column: '性別', key: 'gender' },
          { column: '予約件数', key: 'reservationCount' },
          { column: '権限', key: 'role' }
        ]}
        item={data}
      />
    </Section>
  )
}

export default React.memo(UserDetail)
