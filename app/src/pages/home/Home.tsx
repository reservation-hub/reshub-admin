import React from 'react'
import { useDispatch } from 'react-redux'
import HomeStyle from '../../components/home/HomeStyle'
import { Link } from 'react-router-dom'
import List from '../../components/shop/SalonList'
import { logout } from '../../store/actions/authAction'


function Home() {
  const dispatch = useDispatch()
  const onLogOut = () => {
    dispatch(logout())
  }

	return(
	<>
    <ul>
      <li><Link to='../shop'>レストラン</Link></li>
      <li><Link to='../shop/list'>美容院</Link></li>
    </ul>
    <button onClick={ onLogOut }>logout</button>
  </>

    )
}

export default Home