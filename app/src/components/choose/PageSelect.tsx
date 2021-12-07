import React from 'react'
import { Link } from 'react-router-dom'

const PageSelect = () => {
  const box =
    'w-[55rem] mx-auto p-[3rem] rounded-[.5rem] bg-secondary-main flex justify-between text-center'

  return (
    <div className={box}>
      <div className='container p-5'>
        <Link
          to='/salon_dashboard'
          className='text-[2.4rem] text-primary hover:underline'
        >
          サロン
        </Link>
      </div>
      <div className='container p-5'>
        <Link to='' className='text-[2.4rem] text-primary hover:underline'>
          レストラン
        </Link>
      </div>
    </div>
  )
}

export default PageSelect
