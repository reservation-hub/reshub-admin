import React from 'react'

import { Grid, Typography } from '@material-ui/core'

import CommonStyle from '../../CommonStyle'

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
        <button>並び替え</button>
        <button>絞り込み</button>
        <button onClick={ modalOpenHandler }>ユーザー追加</button>
      </Grid>
    </Grid>
  )
}

export default ListTopBar
