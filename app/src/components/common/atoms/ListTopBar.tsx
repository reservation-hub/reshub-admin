import React from 'react'

import { Grid } from '@material-ui/core'
import { ListTopBarProps } from '../../user/_PropsType'

import CommonStyle from '../../CommonStyle'
import CustomButton from './CustomButton'
import H1 from './H1'

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
        <H1 className='item-header'>{ title }</H1>
      </Grid>
      <Grid item className='item-button'>
        {/* 実装予定 */ }
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
