import React from 'react'
import SubHeader from '@/components/common/atoms/SubHeader'
import { IDetailProps } from '../_PropsType'
import { HEADER_TYPE } from '@constants/Common'
import ShopData from '@components/detail/shop/ShopData'
import CustomButton from '@components/common/atoms/CustomButton'
import TableLayout from '@/components/common/atoms/TableLayout'
import { STYLELIST_CELL } from '@/constants/Table'
import history from '@/utils/routes/history'
import Section from '@/components/common/layout/Section'

const DetailItem = ({
  shop,
  modalOpenHandler,
  subModalHandler
}: IDetailProps) => {
  const styleList: {
    id: number
    name: string
    reservationCount: number
  }[] = [
    { id: 1, name: 'TEST', reservationCount: 1 },
    { id: 2, name: 'TEST', reservationCount: 1 },
    { id: 3, name: 'TEST', reservationCount: 1 },
    { id: 4, name: 'TEST', reservationCount: 1 },
    { id: 5, name: 'TEST', reservationCount: 1 }
  ]

  return (
    <Section>
      <SubHeader
        title={`${shop?.name}の詳細`}
        type={HEADER_TYPE.DETAIL}
        modalOpenHandler={modalOpenHandler}
        subModalHandler={subModalHandler}
      >
        <CustomButton onClick={history.goBack}>戻る</CustomButton>
      </SubHeader>
      <div className='container flex justify-between'>
        <ShopData shop={shop} />
        <div className='w-[55rem] h-full'>
          <TableLayout cell={STYLELIST_CELL}>
            {styleList.map((value, index) => (
              // TODO ここはかりなので後から作成
              <tr key={index}>
                <td>{value.id}</td>
              </tr>
            ))}
          </TableLayout>
        </div>
      </div>
    </Section>
  )
}

export default DetailItem
