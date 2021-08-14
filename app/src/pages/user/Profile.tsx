import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { RootState } from '../../store/store'
import { getOneUser } from '../../store/actions/userAction'

import ProfileItem from '../../components/user/profile/ProfileItem'

interface MatchParams {
  id: string
}

const Profile = ({ match }: RouteComponentProps<MatchParams>) => {

  const { id } = match.params
  const convertId: number = +id
  const dispatch = useDispatch()
  const { user } = useSelector((state: RootState) => state.user)

  useEffect(() => {
    dispatch(getOneUser(convertId))
  }, [dispatch, convertId])
  // TODO スタイルを指定
  return (
    <ProfileItem
      userEmail={ user.email }
      kanjiName={ `${user.firstNameKanji} ${user.lastNameKanji}` }
      kanaName={ `${user.firstNameKana} ${user.lastNameKana}` }
      gender={ user.gender }
      role={ user.roles && user.roles.map((r: any) => r.name) }
    />
  )
}

export default Profile
