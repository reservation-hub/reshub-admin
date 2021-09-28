import React from 'react'
import Grid from '@material-ui/core/Grid'
import CommonStyle from '@components/CommonStyle'
import CustomButton from './CustomButton'
import H1 from './H1'
import { ITopBarProps } from '../_PropsType'
import { HEADER_TYPE } from '@constants/Common'

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
        {type === HEADER_TYPE.LIST ? (
          <>
            <CustomButton>並び替え</CustomButton>
            <CustomButton>絞り込み</CustomButton>
          </>
        ) : (
          <CustomButton onClick={subModalHandler}>削除</CustomButton>
        )}
        <CustomButton onClick={modalOpenHandler}>
          {type === HEADER_TYPE.LIST ? '新規登録' : '編集'}
        </CustomButton>
      </Grid>
    </Grid>
  )
}

export default ListTopBar
