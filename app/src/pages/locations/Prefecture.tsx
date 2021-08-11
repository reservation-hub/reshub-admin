import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getPrefecture } from '../../store/actions/locationAction'
import { RootState } from '../../store/store'

import LocationTable from '../../components/location/LocationTable'
import CommonStyle from '../../components/CommonStyle'
import MainTemplate from '../../components/common/MainTemplate'


const Prefecture = () => {

  const classes = CommonStyle()

  const dispatch = useDispatch()
  const { location } = useSelector((state: RootState) => state.location)

  useEffect(() => {
    dispatch(getPrefecture())
  }, [dispatch])

  return (
    <MainTemplate>
      <LocationTable 
        tableTitle='都道府県一覧'
        tableColumnIndex='No'
        tableColumnName='都道府県'
        data={ location['data'] }
      />
    </MainTemplate>
  )
}

export default Prefecture
