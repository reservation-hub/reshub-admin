import React from 'react'
import { Grid } from '@material-ui/core'
import { FaRegUserCircle } from 'react-icons/fa'
import ListTopBar from '@components/common/atoms/ListTopBar'
import useBirthday from '@utils/hooks/useBirthday'
import { IDetailProps } from '@components/detail/_PropsType'
import { HEADER_TYPE } from '@constants/Common'

const ProfileItem = ({
  user,
  modalOpenHandler,
  subModalHandler
}: IDetailProps) => {
  const birthday = useBirthday(user?.birthday)

  return (
    <>
      <ListTopBar
        title='ユーザー詳細'
        type={HEADER_TYPE.DETAIL}
        modalOpenHandler={modalOpenHandler}
        subModalHandler={subModalHandler}
      />
      <Grid container style={{ display: 'grid' }}>
        <Grid item>
          <FaRegUserCircle />
        </Grid>
        <Grid item>
          <dt>
            <strong>メールアドレス</strong>
          </dt>
          <dl>{user?.email}</dl>
        </Grid>
        <Grid item>
          <dt>
            <strong>ユーザーネーム</strong>
          </dt>
          <dl>{user?.username ?? 'ユーザーネームを設定してくだい。'}</dl>
        </Grid>
        <Grid item>
          <dt>
            <strong>お名前</strong>
          </dt>
          <dl>
            {user?.firstNameKanji} {user?.lastNameKanji}
          </dl>
        </Grid>
        <Grid item>
          <dt>
            <strong>カナ</strong>
          </dt>
          <dl>
            {user?.firstNameKana} {user?.lastNameKana}
          </dl>
        </Grid>
        <Grid item>
          <dt>
            <strong>生年月日</strong>
          </dt>
          <dl>{birthday === 'Invalid Date' ? '-' : birthday}</dl>
        </Grid>
        <Grid item>
          <dt>
            <strong>性別</strong>
          </dt>
          <dl>{user?.gender === '0' ? '男性' : '女性'}</dl>
        </Grid>
        <Grid item>
          <dt>
            <strong>アクセス権限</strong>
          </dt>
          <dl>{user?.role.name}</dl>
        </Grid>
      </Grid>
    </>
  )
}

export default React.memo(ProfileItem)
