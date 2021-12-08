import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import SubHeader from '@/components/common/atoms/SubHeader'
import useBirthday from '@utils/hooks/useBirthday'
import { IDetailProps } from '@components/detail/_PropsType'
import { HEADER_TYPE } from '@constants/Common'
import Section from '@/components/common/layout/Section'

const ProfileItem = ({
  user,
  modalOpenHandler,
  subModalHandler
}: IDetailProps) => {
  const birthday = useBirthday(user?.birthday)
  const dt =
    'min-w-[15rem] text-[1.6rem] border-r-0 inline-block p-[2rem] border border-b-0 border-primary'
  const dd =
    'flex-1 text-[1.6rem] m-0 inline-block p-[2rem] border-b-0 border-primary border'

  return (
    <Section>
      <SubHeader
        title='ユーザー詳細'
        type={HEADER_TYPE.DETAIL}
        modalOpenHandler={modalOpenHandler}
        subModalHandler={subModalHandler}
      />
      <div className='w-[55rem]'>
        <FaRegUserCircle className='w-[10rem] h-[10rem] mx-auto my-4' />
      </div>
      <div className='w-[55rem] border-primary border-b bg-secondary-main'>
        <div className='flex'>
          <dt className={dt}>メールアドレス</dt>
          <dd className={dd}>{user?.email}</dd>
        </div>
        <div className='flex'>
          <dt className={dt}>ユーザーネーム</dt>
          <dd className={dd}>
            {user?.username ?? 'ユーザーネームを設定してくだい。'}
          </dd>
        </div>
        <div className='flex'>
          <dt className={dt}>お名前</dt>
          <dd className={dd}>
            {user?.firstNameKanji} {user?.lastNameKanji}
          </dd>
        </div>
        <div className='flex'>
          <dt className={dt}>カナ</dt>
          <dd className={dd}>
            {user?.firstNameKana} {user?.lastNameKana}
          </dd>
        </div>
        <div className='flex'>
          <dt className={dt}>生年月日</dt>
          <dd className={dd}>{birthday === 'Invalid Date' ? '-' : birthday}</dd>
        </div>
        <div className='flex'>
          <dt className={dt}>性別</dt>
          <dd className={dd}>{user?.gender === '0' ? '男性' : '女性'}</dd>
        </div>
        <div className='flex'>
          <dt className={dt}>アクセス権限</dt>
          <dd className={dd}>{user?.role?.name}</dd>
        </div>
      </div>
    </Section>
  )
}

export default React.memo(ProfileItem)
