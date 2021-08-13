import React from 'react'

import { Grid, Typography } from '@material-ui/core'

import CommonStyle from '../../CommonStyle'
import CustomButton from '../../common/atoms/CustomButton'

interface ListTopBarProps {
  modalOpenHandler: () => void
}

const ListTopBar = ({ modalOpenHandler }: ListTopBarProps) => {
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
          ユーザー一覧
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
