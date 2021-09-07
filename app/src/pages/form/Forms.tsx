import React from 'react'
import { Route } from 'react-router-dom'
import SalonForm from '../../components/form/SalonForm'
import MainTemplate from '../../components/common/layout/MainTemplate'
import UserForm from '../../components/form/UserForm'

const Forms = () => {
  return (
    <MainTemplate>
      <Route exact path='/form/salon' component={ SalonForm } />
      <Route path='/form/salon/:id' component={ SalonForm } />
      <Route exact path='/form/user' component={ UserForm } />
      <Route path='/form/user/:id' component={ UserForm } />
    </MainTemplate>
  )
}

export default Forms
