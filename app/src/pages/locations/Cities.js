import React, { useEffect } from 'react'
import { getCity } from '../../store/actions/locationAction'
import store from '../../store/store'
import LocationTable from '../../components/location/LocationTable'

const Cities = () => {

  const { location } = store.useSelector(state => state.location)

  useEffect(() => {
    store.dispatch(getCity())
  }, [])

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
