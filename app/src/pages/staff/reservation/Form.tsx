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
import {
  createReservation,
  patchReservation
} from '@store/actions/reservationAction'
import dayjs from '@utils/hooks/useDayJs'
import { TFormState } from '@components/form/_PropsType'
import useConvertTime from '@utils/hooks/useConvertTime'

const Form = ({ location }: RouteComponentProps<any, any, TFormState>) => {
  const dispatch = useDispatch()

  const option = location.state?.option

  const reservation = useMemo(() => {
    return location.state?.reservation
  }, [location])

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ReservationSchema>({
    resolver: zodResolver(reservationSchema),
    mode: 'onSubmit',
    defaultValues: {
      reservationDay: useConvertTime('ymd', reservation?.reservationDate) ?? '',
      reservationTime: useConvertTime('hm', reservation?.reservationDate) ?? '',
      userId: reservation?.clientId ?? undefined,
      menuId: reservation?.menuId ?? undefined,
      stylistId: reservation?.stylistId ?? undefined
    }
  })

  const onSubmit: SubmitHandler<ReservationSchema> = useCallback(
    (value, event) => {
      event?.preventDefault()
      if (reservation) {
        dispatch(
          patchReservation({
            shopId: Number(reservation.shopId),
            reservationId: Number(reservation.id),
            params: {
              ...value,
              reservationDate: dayjs(
                `${value.reservationDay} ${value.reservationTime}:00`
              ).format('YYYY-MM-DD HH:mm:ss')
            }
          })
        )
      } else {
        dispatch(
          createReservation({
            shopId: Number(option),
            params: {
              userId: value.userId,
              menuId: value.menuId,
              stylistId: value.stylistId,
              reservationDate: dayjs(
                `${value.reservationDay} ${value.reservationTime}:00`
              ).format('YYYY-MM-DD HH:mm:ss')
            }
          })
        )
      }
    },
    [dispatch]
  )

  return (
    <ReservationForm
      submitHandler={handleSubmit(onSubmit)}
      control={control}
      shopId={Number(option) || Number(reservation?.shopId)}
      error={errors}
      formState={location.state}
      defaultValue={reservation}
    />
  )
}

export default Form
