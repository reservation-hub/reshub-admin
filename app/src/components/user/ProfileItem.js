import React from 'react'

const ProfileItem = ({ 
  userFirstname,
  userLastname,
  userEmail
 }) => {

  console.log(userFirstname)

  return (
    <div>
      <div>{ userFirstname }</div>
      <div>{ userLastname }</div>
      <div>{ userEmail }</div>
    </div>
  )
}

export default ProfileItem
