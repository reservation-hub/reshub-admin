import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCity } from '../../store/actions/locationAction'

import LocationTable from '../../components/location/LocationTable'
import CommonStyle from '../../components/CommonStyle'

const Cities = () => {

  const classes = CommonStyle()

  const dispatch = useDispatch()
  const { location } = useSelector(state => state.location)

  useEffect(() => {
    dispatch(getCity())
  }, [dispatch])

  return (
    <main className={ classes.mainBackground }>
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
