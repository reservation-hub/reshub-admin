import React from 'react'
import Grid from '@material-ui/core/Grid'
import CustomButton from './CustomButton'
import H1 from './H1'
import { ITopBarProps } from '../_PropsType'
import { HEADER_TYPE } from '@constants/Common'
import { makeStyles } from '@material-ui/core/styles'

const classes = makeStyles((theme) => ({
  root: {
    paddingBottom: '1.5rem',

    '& .item-header': {
      color: theme.palette.primary.main
    },
    '& .item-button': {
      width: '35rem',
      justifyContent: 'flex-end',
      '& button': {
        marginLeft: '1rem'
      }
    }
  }
}))

const ListTopBar = ({
  title,
  modalOpenHandler,
  type,
  subModalHandler,
  children
}: ITopBarProps) => {
  return (
    <Grid
      container
      justifyContent='space-between'
      alignItems='center'
      className={classes().root}
    >
      <Grid item>
        <H1 classes='item-header'>{title}</H1>
      </Grid>
      <Grid item className='item-button display-flex'>
        {/* 実装予定 */}
        {children}
        {type === HEADER_TYPE.DETAIL && (
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
