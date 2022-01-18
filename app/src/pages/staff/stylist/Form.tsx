import StylistForm from '@components/form/stylist/StylistForm'
import {
  StylistSchema,
  stylistSchema
} from '@components/form/stylist/stylistSchema'
import { TFormState } from '@components/form/_PropsType'
import { createStylist, editStylist } from '@store/actions/stylistAction'
import useConvertTime from '@utils/hooks/useConverTime'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useCallback, useEffect, useMemo } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import dayjs from 'dayjs'
import { currentDate } from '@/constants/Time'
import { RootState } from '@/store/store'
import { getOneShop } from '@/store/actions/shopAction'

const Form = ({ location }: RouteComponentProps<any, any, TFormState>) => {
  const dispatch = useDispatch()

  const shopId = location.state?.option

  const stylist = useMemo(() => {
    return location.state?.stylist
  }, [location])

  const { shop } = useSelector((state: RootState) => state.shop)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<StylistSchema>({
    resolver: zodResolver(stylistSchema),
    mode: 'onSubmit',
    defaultValues: {
      name: stylist?.name ?? '',
      price: String(stylist?.price) ?? '',
      days: stylist?.days ?? [],
      startTime: useConvertTime('hm', stylist?.startTime) ?? '',
      endTime: useConvertTime('hm', stylist?.endTime) ?? ''
    }
  })

  const onSubmit: SubmitHandler<StylistSchema> = useCallback(
    (value, event) => {
      event?.preventDefault()
      console.log(value)
      if (stylist) {
        dispatch(
          editStylist({
            shopId: stylist?.shopId,
            stylistId: stylist?.id,
            params: {
              ...value,
              price: Number(value.price),
              startTime: dayjs(`${currentDate} ${value.startTime}:00`).toDate(),
              endTime: dayjs(`${currentDate} ${value.endTime}:00`).toDate()
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
              startTime: dayjs(`${currentDate} ${value.startTime}:00`).toDate(),
              endTime: dayjs(`${currentDate} ${value.endTime}:00`).toDate()
            }
          })
        )
      }
    },
    [dispatch]
  )

  useEffect(() => {
    if (shopId) dispatch(getOneShop(Number(shopId)))
  }, [dispatch, shopId])

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
