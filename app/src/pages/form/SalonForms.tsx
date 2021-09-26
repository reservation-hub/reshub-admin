import React, { useCallback, useMemo } from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import SalonForm from '../../components/form/SalonForm'
import MainTemplate from '../../components/common/layout/MainTemplate'
import { TFormState, TSalonInput } from '../../components/form/_PropsType'
import { useDispatch } from 'react-redux'
import useInput from '../../utils/useInput'
import { useTimePicker } from '../../utils/useTimePicker'
import { useSelect } from '../../utils/useSelect'
import { useCheckBox } from '../../utils/useCheckBox'
import { insertShopQuery, updateShopQuery } from '../../utils/api/request-response-types/ShopService'
import { addShop, editShopData } from '../../store/actions/shopAction'

const SalonForms = ({ location }: RouteComponentProps<any, any, TFormState>) => {
  const dispatch = useDispatch()
  const shop = location.state?.shop

  const startAt = useTimePicker(0)
  const endAt = useTimePicker(0)
  const areaSelector = useSelect(shop ? String(shop.area?.id) : '')
  const prefSelector = useSelect(shop ? String(shop.prefecture?.id) : '')
  const citySelector = useSelect(shop ? String(shop.city?.id) : '')
  const { checked, changeHandler } = useCheckBox([])

  const { input, ChangeHandler } = useInput({
    name: '',
    address: '',
    phoneNumber: ''
  })

  const form = useMemo(() => {
    return {
      name: shop ? shop?.name : input.name,
      address: shop ? shop?.address : input.address,
      phoneNumber: shop ? shop?.phoneNumber : input.phoneNumber,
      cityId: citySelector.option,
      prefectureId: prefSelector.option,
      areaId: areaSelector.option,
      startTime: { hour: String(startAt.hour), minute: String(startAt.minute) },
      endTime: { hour: String(endAt.hour), minute: String(endAt.minute) },
      days: shop ? shop?.schedule?.days : checked
    } as TSalonInput
  }, [shop, input, startAt, endAt, citySelector, prefSelector, areaSelector, checked])

  const shopData: { insertData: insertShopQuery, updateData: updateShopQuery }
    = useMemo(() => {
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
      <Route exact path="/">
        <SalonForm
          submitHandler={ onSubmit }
          formState={ location.state }
          formValue={ form }
          changeHandler={ ChangeHandler }
          selectArea={ areaSelector }
          selectPref={ prefSelector }
          selectCity={ citySelector }
          startAt={ startAt }
          endAt={ endAt }
          checkHandler={ changeHandler }
        />
      </Route>
      <Route path="/:id">
        <SalonForm
          submitHandler={ onSubmit }
          formState={ location.state }
          formValue={ form }
          changeHandler={ ChangeHandler }
          selectArea={ areaSelector }
          selectPref={ prefSelector }
          selectCity={ citySelector }
          startAt={ startAt }
          endAt={ endAt }
          checkHandler={ changeHandler }
        />
      </Route>
    </MainTemplate>
  )
}

export default SalonForms
