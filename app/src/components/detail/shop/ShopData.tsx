import React from 'react'
import { IDetailProps } from '@components/detail/_PropsType'

const ShopData = ({ shop }: IDetailProps) => {
  const dt =
    'min-w-[13rem] text-[1.6rem] font-bold border-r-0 inline-block p-[1rem] border border-b-0 border-secondary-main text-secondary-main bg-primary'
  const dd =
    'flex-1 text-[1.4rem] m-0 inline-block p-[1rem] border-b-0 border-primary border'
  return (
    <div className='w-[40rem] border-primary border-b bg-secondary-main'>
      <div className='flex'>
        <dt className={dt}>店舗名</dt>
        <dd className={dd}>{shop?.name}</dd>
      </div>
      <div className='flex'>
        <dt className={dt}>住所</dt>
        <dd className={dd}>{`${shop?.prefectureName}${shop?.cityName}${
          shop?.address ?? ''
        }`}</dd>
      </div>
      <div className='flex'>
        <dt className={dt}>電話番号</dt>
        <dd className={dd}>{shop?.phoneNumber}</dd>
      </div>
      <div className='flex'>
        <dt className={dt}>営業日</dt>
        <dd className={dd}>{shop?.days?.join(' ・ ')}</dd>
      </div>
      <div className='flex'>
        <dt className={dt}>営業時間</dt>
        <dd className={dd}>
          {`${shop?.startTime + ' - ' + shop?.endTime ?? ''}`}
        </dd>
      </div>
      <div className='flex'>
        <dt className={dt}>詳細</dt>
        <dd className={dd}>{shop?.details}</dd>
      </div>
    </div>
  )
}

export default ShopData
