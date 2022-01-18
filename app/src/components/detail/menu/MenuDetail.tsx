import React from 'react'
import CustomButton from '@components/common/atoms/CustomButton'
import SubHeader from '@components/common/atoms/SubHeader'
import { HEADER_TYPE } from '@constants/Common'
import history from '@utils/routes/history'
import { IDetailProps } from '@components/detail/_PropsType'
import DataTable from '@components/common/atoms/DataTable'
import { MenuResponse } from '@utils/api/request-response-types/Shop'

const MenuDetail = ({
  item,
  modalOpenHandler,
  subModalHandler
}: IDetailProps) => {
  type MenuDetail = MenuResponse & {
    price: string
    duration: string
  }

  const data = {
    ...item,
    price: `${item?.price?.toLocaleString()}¥`,
    duration: `${item?.duration}分`
  } as MenuDetail

  return (
    <>
      <SubHeader
        title={`${data.name}詳細`}
        type={HEADER_TYPE.DETAIL}
        modalOpenHandler={modalOpenHandler}
        subModalHandler={subModalHandler}
      >
        <CustomButton onClick={history.goBack}>戻る</CustomButton>
      </SubHeader>

      <DataTable
        cell={[
          { column: 'メニュー名', key: 'name' },
          { column: '値段', key: 'price' },
          { column: '時間', key: 'duration' },
          { column: '詳細', key: 'description' }
        ]}
        item={data}
      />
    </>
  )
}

export default MenuDetail
