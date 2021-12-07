import React from 'react'

const Loading = () => {
  const spinner =
    'w-[5rem] h-[5rem] absolute top-2/4 left-2/4 animate-spin border-4 border-t-transparent border-primary rounded-full'
  return (
    <div className='container h-full'>
      <div className={spinner} />
    </div>
  )
}

export default Loading
