import React, { useCallback, useMemo } from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import SalonForm from '@components/form/shop/SalonForm'
import { TFormState } from '@components/form/_PropsType'
import { useDispatch } from 'react-redux'
import { addShop, editShopData } from '@store/actions/shopAction'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ShopSchema, shopSchema } from '@components/form/shop/shopSchema'

const Form = ({ location }: RouteComponentProps<any, any, TFormState>) => {
  const dispatch = useDispatch()
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
      areaId: shop ? String(shop.areaId) : '',
      prefectureId: shop ? String(shop.prefectureId) : '',
      cityId: shop ? String(shop.cityId) : '',
      startTime: shop?.startTime || '',
      endTime: shop?.endTime || '',
      days: shop?.days || [],
      seats: shop?.seats || 0,
      details: shop?.details || ''
    }
  })

  const watchLocationIds = watch(['areaId', 'prefectureId'])

  const onSubmit: SubmitHandler<ShopSchema> = useCallback(
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
              startTime: value.startTime,
              endTime: value.endTime
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
            startTime: value.startTime,
            endTime: value.endTime
          })
        )
      }
    },
    [dispatch]
  )

  return (
    <>
      <Route path='/'>
        <SalonForm
          submitHandler={handleSubmit(onSubmit)}
          watchLocationIds={watchLocationIds}
          formState={location.state}
          formValue={control._defaultValues}
          control={control}
          error={errors}
        />
      </Route>
      <Route path='/form/:id'>
        <SalonForm
          submitHandler={handleSubmit(onSubmit)}
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
