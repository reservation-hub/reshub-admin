import React from 'react'
import { IDetailProps } from '@components/detail/_PropsType'
import { useDays } from '@utils/hooks/useDays'

const ShopData = ({ shop }: IDetailProps) => {
  const days = useDays(shop?.schedule?.days)
  const dt =
    'min-w-[15rem] text-[1.6rem] border-r-0 inline-block p-[2rem] border border-b-0 border-primary'
  const dd =
    'flex-1 text-[1.6rem] m-0 inline-block p-[2rem] border-b-0 border-primary border'
  return (
    <div className='w-[55rem] border-primary border-b bg-secondary-main'>
      <div className='flex'>
        <dt className={dt}>店舗名</dt>
        <dd className={dd}>{shop?.name}</dd>
      </div>
      <div className='flex'>
        <dt className={dt}>住所</dt>
        <dd className={dd}>{shop?.address}</dd>
      </div>
      <div className='flex'>
        <dt className={dt}>電話番号</dt>
        <dd className={dd}>{shop?.phoneNumber}</dd>
      </div>
      <div className='flex'>
        <dt className={dt}>営業日</dt>
        <dd className={dd}>{days?.join(' ・ ')}</dd>
      </div>
      <div className='flex'>
        <dt className={dt}>営業時間</dt>
        <dd className={dd}>
          {`${shop?.schedule?.hours?.start ?? ''}
            - 
          ${shop?.schedule?.hours.end ?? ''}`}
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
