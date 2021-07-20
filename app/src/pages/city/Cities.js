import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCity } from '../../store/actions/locationAction'
import CityList from '../../components/city/CityList'

const Cities = () => {

  const dispatch = useDispatch()
  const { location } = useSelector(state => state.location)

  useEffect(() => {
    dispatch(getCity())
  }, [dispatch])

  return (
    <main>
      <CityList cities={ location } />
    </main>
  )
}

export default Cities
