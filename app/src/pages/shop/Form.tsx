import React, { useCallback, useMemo } from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import SalonForm from '@/components/form/shop/SalonForm'
import { TFormState } from '@components/form/_PropsType'
import { useDispatch } from 'react-redux'
import { addShop, editShopData } from '@store/actions/shopAction'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  shopSchema,
  ShopSchema
} from '@components/form/validation/validationSchema'
import dayjs from 'dayjs'
import useConvertTime from '@/utils/hooks/useConverTime'

const Form = ({ location }: RouteComponentProps<any, any, TFormState>) => {
  const dispatch = useDispatch()
  const currentDay = dayjs().format('YYYY-MM-DD')
  const shop = useMemo(() => {
    return location.state?.shop
  }, [location])

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<ShopSchema>({
    resolver: zodResolver(shopSchema),
    mode: 'onSubmit',
    defaultValues: {
      name: shop?.name || '',
      phoneNumber: shop?.phoneNumber || '',
      address: shop?.address || '',
      areaId: String(shop?.areaId) || undefined,
      prefectureId: String(shop?.prefectureId) || undefined,
      cityId: String(shop?.cityId) || undefined,
      startTime: useConvertTime('hm', shop?.startTime) || '',
      endTime: useConvertTime('hm', shop?.endTime) || '',
      days: shop?.days || [],
      seats: String(shop?.seats) || '',
      details: shop?.details || ''
    }
  })

  const test = dayjs().format('YYYY-MM-DD')
  const test2 = dayjs(`${currentDay} 10:00:00`).format()
  console.log(test2)

  const watchLocationIds = watch(['areaId', 'prefectureId'])

  const createShop: SubmitHandler<ShopSchema> = useCallback(
    (value, event) => {
      event?.preventDefault()
      if (shop) {
        dispatch(
          editShopData({
            id: Number(shop?.id),
            params: {
              ...value,
              areaId: Number(value.areaId),
              prefectureId: Number(value.prefectureId),
              cityId: Number(value.cityId),
              seats: Number(value.seats),
              startTime: new Date(),
              endTime: new Date()
            }
          })
        )
      } else {
        dispatch(
          addShop({
            ...value,
            areaId: Number(value.areaId),
            prefectureId: Number(value.prefectureId),
            cityId: Number(value.cityId),
            seats: Number(value.seats),
            startTime: new Date(),
            endTime: new Date()
          })
        )
      }
    },
    [dispatch]
  )

  console.log(control._defaultValues)
  return (
    <>
      <Route path='/'>
        <SalonForm
          submitHandler={handleSubmit(createShop)}
          watchLocationIds={watchLocationIds}
          formState={location.state}
          formValue={control._defaultValues}
          control={control}
          error={errors}
        />
      </Route>
      <Route path='/form/:id'>
        <SalonForm
          submitHandler={handleSubmit(createShop)}
          watchLocationIds={watchLocationIds}
          formState={location.state}
          formValue={control._defaultValues}
          control={control}
        />
      </Route>
    </>
  )
}

export default Form
