import React, { useCallback, useMemo } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import ReservationForm from '@components/form/reservation/ReservationForm'
import { RouteComponentProps } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  reservationSchema,
  ReservationSchema
} from '@components/form/reservation/reservationSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { createReservation } from '@store/actions/reservationAction'
import dayjs from '@utils/hooks/useDayJs'
import { TFormState } from '@components/form/_PropsType'

const Form = ({ location }: RouteComponentProps<any, any, TFormState>) => {
  const dispatch = useDispatch()

  const option = location.state?.option

  const reservation = useMemo(() => {
    return location.state?.reservation
  }, [location])

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<ReservationSchema>({
    resolver: zodResolver(reservationSchema),
    mode: 'onSubmit',
    defaultValues: {
      reservationDay:
        String(dayjs(reservation?.reservationDate).format('YYYY-MM-DD')) ?? '',
      reservationTime:
        String(dayjs(reservation?.reservationDate).format('HH:mm')) ?? '',
      userId: String(reservation?.clientName) ?? '',
      menuId: '',
      stylistId: ''
    }
  })

  const watchAll = watch()

  const onSubmit: SubmitHandler<ReservationSchema> = useCallback(
    (value) => {
      dispatch(
        createReservation({
          shopId: Number(option),
          params: {
            userId: Number(value.userId),
            menuId: Number(value.menuId),
            stylistId: Number(value.stylistId),
            reservationDate: dayjs(
              `${value.reservationDay} ${value.reservationTime}:00`
            ).format('YYYY-MM-DD HH:mm:ss')
          }
        })
      )
    },
    [dispatch]
  )

  return (
    <ReservationForm
      submitHandler={handleSubmit(onSubmit)}
      control={control}
      shopId={Number(option)}
      error={errors}
      formState={location.state}
    />
  )
}

export default Form
