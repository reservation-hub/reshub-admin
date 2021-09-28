import React, { useCallback, useMemo } from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import SalonForm from '@components/form/SalonForm'
import MainTemplate from '@components/common/layout/MainTemplate'
import {
  TChangeHandle,
  TFormState,
  TSalonInput
} from '@components/form/_PropsType'
import { useDispatch } from 'react-redux'
import useInput from '@utils/useInput'
import { useTimePicker } from '@utils/useTimePicker'
import { useCheckBox } from '@utils/useCheckBox'
import {
  insertShopQuery,
  updateShopQuery
} from '@utils/api/request-response-types/ShopService'
import { addShop, editShopData } from '@store/actions/shopAction'

const SalonForms = ({
  location
}: RouteComponentProps<any, any, TFormState>) => {
  const dispatch = useDispatch()
  const shop = location.state?.shop

  const startAt = useTimePicker(0)
  const endAt = useTimePicker(0)
  const { checked, changeHandler } = useCheckBox(shop?.schedule?.days ?? [])

  const { input, ChangeHandler } = useInput({
    name: shop?.name ?? '',
    address: shop?.address ?? '',
    phoneNumber: shop?.phoneNumber ?? '',
    areaId: String(shop?.area?.id) ?? '',
    prefectureId: String(shop?.prefecture?.id) ?? '',
    cityId: String(shop?.city?.id) ?? ''
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
      cityId: input.cityId,
      prefectureId: input.prefectureId,
      areaId: input.areaId,
      startTime: { hour: String(startAt.hour), minute: String(startAt.minute) },
      endTime: { hour: String(endAt.hour), minute: String(endAt.minute) },
      days: checked
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
        days: form.days
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
          days: form.days
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
    <MainTemplate>
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
    </MainTemplate>
  )
}

export default SalonForms
