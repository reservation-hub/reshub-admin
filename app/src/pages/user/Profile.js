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

  return (
    <main>
      { user && user.map(
        (user, index) => (
          <ProfileItem
            key={ index } 
            userFirstname={ user.firstName }
            userLastname={ user.lastName }
            userEmail={ user.email }
          />
        )
      ) }
    </main>
  )
}

export default Profile
