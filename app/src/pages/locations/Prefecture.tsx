import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPrefecture } from '../../store/actions/locationAction'
import { RootState } from '../../store/store'

import LocationTable from '../../components/location/LocationTable'
import CommonStyle from '../../components/CommonStyle'


const Prefecture = () => {

  const classes = CommonStyle()

  const dispatch = useDispatch()
  const { location } = useSelector((state: RootState) => state.location)

  useEffect(() => {
    dispatch(getPrefecture())
  }, [dispatch])

  return (
    <main className={ classes.mainBackground }>
      <LocationTable 
        tableTitle='都道府県一覧'
        tableColumnIndex='No'
        tableColumnName='都道府県'
        data={ location['data'] }
      />
    </main>
  )
}

export default Prefecture
