import React from 'react'

interface UserItemProps {
  userEmail: string
  kanjiName: string
  kanaName: string
  gender: string
  role: string
}

const ProfileItem = ({
  userEmail,
  kanjiName,
  kanaName,
  gender,
  role
}: UserItemProps) => {
  
  return (
    <div>
      <span>{ userEmail }</span><br />
      <span>{ kanjiName }</span><br />
      <span>{ kanaName }</span><br />
      <span>{ gender }</span><br />
      <span>{ role }</span>
    </div>
  )
}

export default React.memo(ProfileItem)
