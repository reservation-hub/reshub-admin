import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LocationTable from '../../components/location/LocationTable'
import { getCity } from '../../store/actions/locationAction'

const Cities = () => {

  const dispatch = useDispatch()
  const { location } = useSelector(state => state.location)

  useEffect(() => {
    dispatch(getCity())
  }, [dispatch])

  return (
    <main>
      <LocationTable 
        tableTitle='市区町村一覧'
        tableColumnIndex='No'
        tableColumnName='市区町村'
        data={ location && location.data }
      />
    </main>
  )
}

export default Cities
