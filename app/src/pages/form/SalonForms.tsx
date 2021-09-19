import React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import SalonForm from '../../components/form/SalonForm'
import MainTemplate from '../../components/common/layout/MainTemplate'
import { MatchParams } from '../../components/user/_PropsType'

const SalonForms = ({ location }: RouteComponentProps<MatchParams>) => {
  console.log(location)
  return (
    <MainTemplate>
      <Route exact path="/" component={ SalonForm }/>
      <Route path="/:id" component={ SalonForm }/>
    </MainTemplate>
  )
}

export default SalonForms
