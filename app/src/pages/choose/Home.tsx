import React from 'react'
import LoginSelectHeader from '@/components/common/choose/LoginSelectHeader'
import PageSelect from '@/components/choose/PageSelect'
import LoginSelectFooter from '@/components/common/choose/LoginSelectFooter'
import CenterBox from '@/components/common/layout/CenterBox'

function Home() {
  return (
    <main className='w-full bg-primary h-full m-0'>
      <CenterBox>
        <LoginSelectHeader />
        <PageSelect />
        <LoginSelectFooter />
      </CenterBox>
    </main>
  )
}

export default Home
