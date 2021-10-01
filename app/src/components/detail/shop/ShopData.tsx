import React from 'react'
import Box from '@material-ui/core/Box'
import { IDetailProps } from '@components/detail/_PropsType'
import { DataGrid } from '../_Style'
import { useDays } from '@utils/useDays'

const ShopData = ({ shop }: IDetailProps) => {
  const days = useDays(shop?.schedule?.days)
  return (
    <DataGrid md={6} item>
      <Box className='row'>
        <dt className='header'>店舗名</dt>
        <dd className='body'>{shop?.name}</dd>
      </Box>
      <Box className='row'>
        <dt className='header'>住所</dt>
        <dd className='body'>{shop?.address}</dd>
      </Box>
      <Box className='row'>
        <dt className='header'>電話番号</dt>
        <dd className='body'>{shop?.phoneNumber}</dd>
      </Box>
      <Box className='row'>
        <dt className='header'>営業日</dt>
        <dd className='body'>{days?.join(' ・ ')}</dd>
      </Box>
      <Box className='row'>
        <dt className='header'>営業時間</dt>
        <dd className='body'>
          {`${shop?.schedule?.startTime ?? ''}
              - 
            ${shop?.schedule?.endTime ?? ''}`}
        </dd>
      </Box>
    </DataGrid>
  )
}

export default ShopData
