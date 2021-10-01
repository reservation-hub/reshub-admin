import React, { useCallback, useMemo } from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import SalonForm from '@components/form/SalonForm'
import { TChangeHandle, TFormState, TSalonInput } from '@components/form/_PropsType'
import { useDispatch } from 'react-redux'
import useInput from '@utils/useInput'
import { useTimePicker } from '@utils/useTimePicker'
import { useCheckBox } from '@utils/useCheckBox'
import { insertShopQuery, updateShopQuery } from '@utils/api/request-response-types/ShopService'
import { addShop, editShopData } from '@store/actions/shopAction'

const Form = ({ location }: RouteComponentProps<any, any, TFormState>) => {
  const dispatch = useDispatch()
  const startAt = useTimePicker('')
  const endAt = useTimePicker('')

  const shop = useMemo(() => {
    return location?.state?.shop
  }, [location])

  const { checked, changeHandler } = useCheckBox(shop?.schedule?.days ?? [])

  const { input, ChangeHandler } = useInput({
    name: shop?.name ?? '',
    address: shop?.address ?? '',
    phoneNumber: shop?.phoneNumber ?? '',
<<<<<<< HEAD:app/src/pages/form/SalonForms.tsx
    areaId: String(shop?.area?.id) ?? '',
    prefectureId: String(shop?.prefecture?.id) ?? '',
    cityId: String(shop?.city?.id) ?? '',
    details: shop?.details ?? ''
=======
    areaId: shop?.area?.id ?? '',
    prefectureId: shop?.prefecture?.id ?? '',
    cityId: shop?.city?.id ?? ''
>>>>>>> b564b49 (全体的に修正):app/src/pages/shop/Form.tsx
  })

  const changeHandlers = {
    input: ChangeHandler,
    check: changeHandler,
    startAt: startAt.changeHandler,
    endAt: endAt.changeHandler
  } as TChangeHandle

  const form = useMemo(() => {
    return {
      name: input.name,
      address: input.address,
      phoneNumber: input.phoneNumber,
      cityId: String(input.cityId),
      prefectureId: String(input.prefectureId),
      areaId: String(input.areaId),
      startTime: { hour: String(startAt.hour), minute: String(startAt.minute) },
      endTime: { hour: String(endAt.hour), minute: String(endAt.minute) },
      days: checked,
      details: input.details
    } as TSalonInput
  }, [shop, input, startAt, endAt, checked])

  const shopData: { insertData: insertShopQuery; updateData: updateShopQuery } =
    useMemo(() => {
      const insertData: insertShopQuery = {
        name: form.name,
        address: form.address,
        phoneNumber: form.phoneNumber,
        startTime: startAt.HHmm,
        endTime: endAt.HHmm,
        areaId: Number(form.areaId),
        prefectureId: Number(form.prefectureId),
        cityId: Number(form.cityId),
        days: form.days,
        details: form.details
      }
      const updateData: updateShopQuery = {
        id: Number(shop?.id),
        params: {
          name: form.name,
          address: form.address,
          phoneNumber: form.phoneNumber,
          startTime: startAt.HHmm,
          endTime: endAt.HHmm,
          areaId: Number(form.areaId),
          prefectureId: Number(form.prefectureId),
          cityId: Number(form.cityId),
          days: form.days,
          details: form.details
        }
      }
      return { insertData, updateData }
    }, [form, shop, startAt.HHmm, endAt.HHmm])

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (shop) {
        dispatch(editShopData(shopData.updateData))
      } else {
        dispatch(addShop(shopData.insertData))
      }
    },
    [dispatch, shop, shopData]
  )

  return (
    <>
      <Route exact path='/'>
        <SalonForm
          submitHandler={onSubmit}
          formState={location.state}
          formValue={form}
          changeHandlers={changeHandlers}
        />
      </Route>
      <Route path='/:id'>
        <SalonForm
          submitHandler={onSubmit}
          formState={location.state}
          formValue={form}
          changeHandlers={changeHandlers}
        />
      </Route>
    </>
  )
}

export default Form
