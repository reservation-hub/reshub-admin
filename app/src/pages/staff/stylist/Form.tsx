import StylistForm from '@components/form/stylist/StylistForm'
import {
  StylistSchema,
  stylistSchema
} from '@components/form/stylist/stylistSchema'
import { TFormState } from '@components/form/_PropsType'
import { createStylist, editStylist } from '@store/actions/stylistAction'
import useConvertTime from '@utils/hooks/useConverTime'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useCallback, useMemo } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import convertScheduleTimeToDateString from '@utils/hooks/useConvertScheduleTimeToDateString'

const Form = ({ location }: RouteComponentProps<any, any, TFormState>) => {
  const dispatch = useDispatch()

  const shopId = location.state?.option

  const stylist = useMemo(() => {
    return location.state?.stylist
  }, [location])

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<StylistSchema>({
    resolver: zodResolver(stylistSchema),
    mode: 'onSubmit',
    defaultValues: {
      name: stylist?.name ?? '',
      price: stylist ? String(stylist.price) : '',
      days: stylist?.days ?? [],
      startTime: useConvertTime('hm', stylist?.startTime) ?? '',
      endTime: useConvertTime('hm', stylist?.endTime) ?? ''
    }
  })

  const onSubmit: SubmitHandler<StylistSchema> = useCallback(
    (value, event) => {
      event?.preventDefault()
      if (stylist) {
        dispatch(
          editStylist({
            shopId: stylist?.shopId,
            stylistId: stylist?.id,
            params: {
              ...value,
              price: Number(value.price),
              startTime: convertScheduleTimeToDateString(value.startTime),
              endTime: convertScheduleTimeToDateString(value.endTime)
            }
          })
        )
      } else {
        dispatch(
          createStylist({
            shopId: Number(shopId),
            params: {
              ...value,
              price: Number(value.price),
              startTime: convertScheduleTimeToDateString(value.startTime),
              endTime: convertScheduleTimeToDateString(value.endTime)
            }
          })
        )
      }
    },
    [dispatch]
  )

  return (
    <StylistForm
      submitHandler={handleSubmit(onSubmit)}
      control={control}
      error={errors}
      formState={location?.state}
    />
  )
}

export default Form
