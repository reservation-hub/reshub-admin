import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPrefecture } from '../../store/actions/locationAction'
import PrefectureList from '../../components/prefecture/PrefectureList'

const Prefecture = () => {

  const dispatch = useDispatch()
  const { location } = useSelector(state => state.location)

  useEffect(() => {
    dispatch(getPrefecture())
  }, [dispatch])

  return (
    <main>
      <PrefectureList prefecture={ location } />
    </main>
  )
}

export default Prefecture
