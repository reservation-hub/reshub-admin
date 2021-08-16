import React from 'react'

import PageSelect from '../../components/home/PageSelect'
import LoginSelectHeader from '../../components/common/loginSelect/LoginSelectHeader'
import LoginSelectFooter from '../../components/common/loginSelect/LoginSelectFooter'
import CommonStyle from '../../components/CommonStyle'

function Home() {

  const classes = CommonStyle()

	return(
	  <main className={ classes.loginSelectBackground }>
      <section
        className={ classes.boxCenter }
        style={{ top: '33%' }}
      >
        <LoginSelectHeader />
        <PageSelect />
        <LoginSelectFooter />
      </section>
    </main>
  )
}

export default Home