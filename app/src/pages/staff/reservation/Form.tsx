import React, { useCallback, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import ReservationForm from '@components/form/reservation/ReservationForm'
import { RouteComponentProps } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  reservationSchema,
  ReservationSchema
} from '@components/form/reservation/reservationSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { createReservation } from '@/store/actions/reservationAction'
import dayjs from '@utils/hooks/useDayJs'

const Form = ({ location }: RouteComponentProps<any, any, any>) => {
  const dispatch = useDispatch()

  const option = location.state?.option

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<ReservationSchema>({
    resolver: zodResolver(reservationSchema),
    mode: 'onSubmit',
    defaultValues: {
      reservationDay: '',
      reservationTime: '',
      userId: '',
      menuId: '',
      stylistId: ''
    }
  })

  const watchAll = watch()

  const onSubmit: SubmitHandler<ReservationSchema> = useCallback(
    (value) => {
      dispatch(createReservation({
        shopId: Number(option),
        params: {
          userId: Number(value.userId),
          menuId: Number(value.menuId),
          stylistId: Number(value.stylistId),
          reservationDate: dayjs(`${value.reservationDay} ${value.reservationTime}:00`).tz('Asia/Tokyo').toDate()
        }
      }))
    },
    [dispatch]
  )

  return (
    <ReservationForm
      submitHandler={handleSubmit(onSubmit)}
      control={control}
      shopId={option}
    />
  )
}

export default Form
