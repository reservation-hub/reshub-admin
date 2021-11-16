import React from 'react'
import LoginSelectHeader from '@components/common/loginSelect/LoginSelectHeader'
import CommonStyle from '@components/common/CommonStyle'
import PageSelect from '@components/home/PageSelect'
import LoginSelectFooter from '@components/common/loginSelect/LoginSelectFooter'

function Home() {
  const classes = CommonStyle()

  return (
    <main className={classes.loginSelectBackground}>
      <section className={classes.boxCenter} style={{ top: '33%' }}>
        <LoginSelectHeader />
        <PageSelect />
        <LoginSelectFooter />
      </section>
    </main>
  )
}

export default Home
