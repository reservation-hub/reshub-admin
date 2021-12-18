import React, { useCallback, useMemo } from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import SalonForm from '@components/form/SalonForm'
import {
  TChangeHandler,
  TFormState,
  TSalonInput
} from '@components/form/_PropsType'
import { useDispatch } from 'react-redux'
import useInput from '@utils/hooks/useInput'
import { useTimePicker } from '@utils/hooks/useTimePicker'
import { useCheckBox } from '@utils/hooks/useCheckBox'
import { addShop, editShopData } from '@store/actions/shopAction'
import Section from '@components/common/layout/Section'
import dayjs from 'dayjs'
import {
  InsertShopQuery,
  UpdateShopQuery
} from '@utils/api/request-response-types/Shop'

const Form = ({ location }: RouteComponentProps<any, any, TFormState>) => {
  const dispatch = useDispatch()
  const startAt = useTimePicker('')
  const endAt = useTimePicker('')

  const shop = useMemo(() => {
    return location?.state?.shop
  }, [location])

  const test = dayjs().format('20:00').substring(0, 2)
  const test2 = dayjs().hour(Number(test)).format('HH').toString()

  const { checked, changeHandler } = useCheckBox(shop?.schedule?.days ?? [])

  const { input, ChangeHandler } = useInput({
    name: shop?.name ?? '',
    address: shop?.address ?? '',
    phoneNumber: shop?.phoneNumber ?? '',
    areaId: String(shop?.area?.id) ?? '',
    prefectureId: String(shop?.prefecture?.id) ?? '',
    cityId: String(shop?.city?.id) ?? '',
    details: shop?.details ?? ''
  })

  const changeHandlers = {
    input: ChangeHandler,
    check: changeHandler,
    startAt: startAt.changeHandler,
    endAt: endAt.changeHandler
  } as TChangeHandler

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

  const shopData: { insertData: InsertShopQuery; updateData: UpdateShopQuery } =
    useMemo(() => {
      const insertData: InsertShopQuery = {
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
      const updateData: UpdateShopQuery = {
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

  console.log(shop, dayjs().format('20:00').substring(3, 5), test2)

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
    <Section>
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
    </Section>
  )
}

export default Form
