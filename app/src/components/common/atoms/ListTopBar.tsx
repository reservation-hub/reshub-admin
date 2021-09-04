import React from 'react'

import { Grid } from '@material-ui/core'
import { ListTopBarProps } from '../../user/_PropsType'

import CommonStyle from '../../CommonStyle'
import CustomButton from './CustomButton'
import H1 from './H1'
import { HeaderType } from '../_Constants'

const ListTopBar = ({ title, modalOpenHandler, type, subModalHandler }: ListTopBarProps) => {
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
        { type === HeaderType.LIST && (
          <>
            <CustomButton>並び替え</CustomButton>
            <CustomButton>絞り込み</CustomButton>
          </>
        ) }
        { type === HeaderType.DETAIL && (
          <CustomButton onClick={ subModalHandler }>
            削除
          </CustomButton>
        ) }
        <CustomButton onClick={ modalOpenHandler }>
          { type === 'profile' ? 'プロフィール設定'
            : type === 'users' ? 'ユーザー追加'
              : type === 'salon' ? 'サロン追加'
                : 'サロン編集'
          }
        </CustomButton>
      </Grid>
    </Grid>
  )
}

export default ListTopBar
