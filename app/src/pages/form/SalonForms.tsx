import React from 'react'
import { Route } from 'react-router-dom'
import SalonForm from '../../components/form/SalonForm'
import MainTemplate from '../../components/common/layout/MainTemplate'

const SalonForms = () => {
  return (
    <MainTemplate>
      <Route exact path='/form/salon' component={ SalonForm } />
      <Route path='/form/salon/:id' component={ SalonForm } />
    </MainTemplate>
  )
}

export default SalonForms
