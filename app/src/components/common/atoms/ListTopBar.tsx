import React from 'react'
import { Grid } from '@material-ui/core'
import CommonStyle from '@components/CommonStyle'
import CustomButton from './CustomButton'
import H1 from './H1'
import { HeaderType } from '../_Constants'
import { ITopBarProps } from '../_PropsType'

const ListTopBar = ({
  title,
  modalOpenHandler,
  type,
  subModalHandler
}: ITopBarProps) => {
  const classes = CommonStyle()
  return (
    <Grid
      container
      justifyContent='space-between'
      alignItems='center'
      className={classes.appBarHeader}
    >
      <Grid item>
        <H1 className='item-header'>{title}</H1>
      </Grid>
      <Grid item className='item-button justify-between display-flex'>
        {/* 実装予定 */}
        {type === HeaderType.LIST ? (
          <>
            <CustomButton>並び替え</CustomButton>
            <CustomButton>絞り込み</CustomButton>
          </>
        ) : (
          <CustomButton onClick={subModalHandler}>削除</CustomButton>
        )}
        <CustomButton onClick={modalOpenHandler}>
          {type === HeaderType.LIST ? '新規登録' : '編集'}
        </CustomButton>
      </Grid>
    </Grid>
  )
}

export default ListTopBar
