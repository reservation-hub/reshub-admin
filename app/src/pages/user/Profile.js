import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneUser } from '../../store/actions/userAction'

import ProfileItem from '../../components/user/ProfileItem'

const Profile = ({ match }) => {

  const id = match.params.id
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(getOneUser(id))
  }, [dispatch, id])
  // TODO スタイルを指定
  return (
    <main>
      <ProfileItem
        userEmail={user.email}
        kanjiName={ `${user.firstNameKanji} ${user.lastNameKanji}` }
        kanaName={ `${user.firstNameKana} ${user.lastNameKana}` }
        userName={ user.username }
        gender={ user.gender }
        role={ user.roles && user.roles.map(r => r.name) }
      />
    </main>
  )
}

export default Profile
