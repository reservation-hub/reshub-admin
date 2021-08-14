import React from 'react'

import { Grid, Typography } from '@material-ui/core'
import { ListTopBarProps } from '../../user/_PropsType'

import CommonStyle from '../../CommonStyle'
import CustomButton from './CustomButton'

const ListTopBar = ({ title, modalOpenHandler }: ListTopBarProps) => {
  const classes = CommonStyle()
  return (
    <Grid
      container
      justifyContent='space-between'
      alignItems='center'
      className={ classes.appBarHeader }
    >
      <Grid item>
        <Typography color='primary' variant='h4'>
          { title }
        </Typography>
      </Grid>
      <Grid item>
        {/* 実装予定 */}
        <CustomButton>並び替え</CustomButton>
        <CustomButton>絞り込み</CustomButton>
        <CustomButton onClick={ modalOpenHandler }>
          ユーザー追加
        </CustomButton>
      </Grid>
    </Grid>
  )
}

export default ListTopBar
