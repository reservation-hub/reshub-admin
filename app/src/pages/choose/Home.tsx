import React from 'react'
import LoginSelectHeader from '@/components/common/choose/LoginSelectHeader'
import PageSelect from '@/components/choose/PageSelect'
import LoginSelectFooter from '@/components/common/choose/LoginSelectFooter'
import CenterBox from '@/components/common/layout/CenterBox'
import SubTemplate from '@/components/common/layout/SubTemplate'

function Home() {
  return (
    <SubTemplate>
      <CenterBox>
        <LoginSelectHeader />
        <PageSelect />
        <LoginSelectFooter />
      </CenterBox>
    </SubTemplate>
  )
}

export default Home
