import React, { useCallback } from 'react'
import { Route } from 'react-router-dom'
import SalonForm from '../../components/form/SalonForm'
import MainTemplate from '../../components/common/layout/MainTemplate'
import { useDispatch } from 'react-redux'
import { addShop } from '../../store/actions/shopAction'

const SalonForms = () => {
  
  const dispatch = useDispatch()
  
  const onSubmit = useCallback(
    () => {
      dispatch(addShop)
    },
    [dispatch]
  )
  
  return (
    <MainTemplate>
      <Route exact path='/form/salon' component={ SalonForm } />
      <Route path='/form/salon/:id' component={ SalonForm } />
    </MainTemplate>
  )
}

export default SalonForms
