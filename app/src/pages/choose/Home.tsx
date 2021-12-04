import React from 'react'
import LoginSelectHeader from '@/components/common/choose/LoginSelectHeader'
import CommonStyle from '@components/common/CommonStyle'
import PageSelect from '@/components/choose/PageSelect'
import LoginSelectFooter from '@/components/common/choose/LoginSelectFooter'

function Home() {
  const classes = CommonStyle()

  return (
    <main className='w-full bg-primary h-full m-0'>
      <section className={classes.boxCenter} style={{ top: '33%' }}>
        <LoginSelectHeader />
        <PageSelect />
        <LoginSelectFooter />
      </section>
    </main>
  )
}

export default Home
