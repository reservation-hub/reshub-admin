import React from 'react'

import { StyledPaper } from '../../CommonStyle'
import { UserListProps } from '../_PropsType'
import { Grid } from '@material-ui/core'
import { FaRegUserCircle } from 'react-icons/fa'

import ListTopBar from '../../common/atoms/ListTopBar'
import birthday from '../../../utils/birthday'

const ProfileItem = ({
  user,
  modalOpenHandler,
  subModalHandler
}: UserListProps) => {
  
  return (
    <StyledPaper>
      <ListTopBar
        title='ユーザー詳細'
        type='profile'
        modalOpenHandler={ modalOpenHandler }
        subModalHandler={ subModalHandler }
      />
      <Grid container style={ { display: 'grid' } }>
        <Grid item>
          <FaRegUserCircle />
        </Grid>
        <Grid item>
          <dt>
            <strong>メールアドレス</strong>
          </dt>
          <dl>{ user?.email }</dl>
        </Grid>
        <Grid item>
          <dt>
            <strong>ユーザーネーム</strong>
          </dt>
          <dl>{ user?.username ?? 'ユーザーネームを設定してくだい。' }</dl>
        </Grid>
        <Grid item>
          <dt>
            <strong>お名前（漢字）</strong>
          </dt>
          <dl>{ user?.firstNameKanji } { user?.lastNameKanji }</dl>
        </Grid>
        <Grid item>
          <dt>
            <strong>お名前（カナ）</strong>
          </dt>
          <dl>{ user?.firstNameKana } { user?.lastNameKana }</dl>
        </Grid>
        <Grid item>
          <dt>
            <strong>生年月日</strong>
          </dt>
          <dl>{
            birthday(user?.birthday) === 'Invalid Date'
              ? '-'
              : birthday(user?.birthday)
          }</dl>
        </Grid>
        <Grid item>
          <dt>
            <strong>性別</strong>
          </dt>
          <dl>{ user?.gender === '0' ? '男性' : '女性' }</dl>
        </Grid>
        <Grid item>
          <dt>
            <strong>アクセス権限</strong>
          </dt>
          <dl>{ user?.roles?.map(r => r.name) }</dl>
        </Grid>
      </Grid>
    </StyledPaper>
  )
}

export default React.memo(ProfileItem)
