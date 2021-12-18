import CenterBox from '@components/common/layout/CenterBox'
import SubTemplate from '@components/common/layout/SubTemplate'
import { BsQuestion } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import React from 'react'

const NotLoggedIn = () => {
  const background =
    'w-[55rem] h-[35rem] mx-auto rounded-[.5rem] text-[1.6rem] flex justify-center p-[2rem] text-center'
  const loginButton =
    'border p-4 rounded-[.25rem] hover:text-primary hover:bg-secondary-main'
  return (
    <SubTemplate>
      <CenterBox>
        <div className={background}>
          <div className='text-secondary-light'>
            <BsQuestion className='w-[12rem] h-[12rem] mx-auto' />
            <span>
              このページを閲覧する権限がございません。
              <br />
              ログインするか運営まで問い合わせください。
            </span>
            <div className='mt-[3rem]'>
              <Link to='/auth' className={loginButton}>
                ログインする
              </Link>
            </div>
          </div>
        </div>
      </CenterBox>
    </SubTemplate>
  )
}

export default NotLoggedIn
