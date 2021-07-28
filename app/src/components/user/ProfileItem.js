import React from 'react'

const ProfileItem = ({
  userEmail,
  kanjiName,
  kanaName,
  userName,
  gender,
  role
 }) => {

  return (
    <div>
      <span>{ userEmail }</span><br />
      <span>{ kanjiName }</span><br />
      <span>{ kanaName }</span><br />
      <span>{ userName }</span><br />
      <span>{ gender }</span><br />
      <span>{ role }</span>
    </div>
  )
}

export default React.memo(ProfileItem)
