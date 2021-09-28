import React from 'react'
import Box from '@material-ui/core/Box'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { IDetailProps } from '@components/detail/_PropsType'

export const DataGrid = withStyles((theme) => ({
  root: {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    '& .row': {
      display: 'flex',
      '& .header, .body': {
        display: 'inline-block',
        padding: '2rem',
        border: `2px solid ${theme.palette.primary.main}`,
        borderBottomWidth: '0px'
      },
      '& .header': {
        minWidth: '15rem',
        fontWeight: 'bold',
        fontSize: '1.6rem',
        borderRightWidth: '0px'
      },
      '& .body': {
        flex: '1 1 0%',
        fontSize: '1.6rem',
        margin: '0'
      }
    }
  }
}))(Grid)

const ShopData = ({ shop }: IDetailProps) => {
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
        <dd className='body'>{shop?.schedule?.days.join(' ・ ')}</dd>
      </Box>
      <Box className='row'>
        <dt className='header'>営業時間</dt>
        <dd className='body'>{`${shop?.schedule?.startTime} - ${shop?.schedule?.endTime}`}</dd>
      </Box>
    </DataGrid>
  )
}

export default ShopData
