import React from 'react'

import { useDispatch } from 'react-redux'
import { logout } from '../../store/actions/authAction'

import PageSelect from '../../components/home/PageSelect'
import LoginSelectHeader from '../../components/common/loginSelect/LoginSelectHeader'
import LoginSelectFooter from '../../components/common/loginSelect/LoginSelectFooter'
import CommonStyle from '../../components/CommonStyle'

function Home() {

  const classes = CommonStyle()
  const dispatch = useDispatch()

  const onLogOut = () => {
    dispatch(logout())
  }

	return(
	  <main className={ classes.loginSelectBackground }>
      <section
        className={ classes.boxCenter }
        style={{ top: '35%' }}
      >
        <LoginSelectHeader />
        <PageSelect />
        <LoginSelectFooter />
      </section>
    </main>
  )
}

export default Home