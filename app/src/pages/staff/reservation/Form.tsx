import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import ReservationForm from '@components/form/reservation/ReservationForm'
import { RouteComponentProps } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  reservationSchema,
  ReservationSchema
} from '@components/form/reservation/reservationSchema'
import { zodResolver } from '@hookform/resolvers/zod'

const Form = ({ location }: RouteComponentProps<any, any, any>) => {
  const dispatch = useDispatch()

  const option = location.state

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<ReservationSchema>({
    resolver: zodResolver(reservationSchema),
    mode: 'onSubmit',
    defaultValues: {
      reservationDate: '',
      userId: '',
      menuId: '',
      stylistId: ''
    }
  })

  // const onSubmit = useCallback(() => {},[])
  return (
    <div></div>
  )
  // return <ReservationForm submitHandler={handleSubmit(onSubmit)} />
}

export default Form
