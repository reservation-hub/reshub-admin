import React, { useEffect } from 'react'
import TimePicker from '@components/common/atoms/TimePicker'
import { useDispatch, useSelector } from 'react-redux'
import { getArea, getOneCity, getOnePref } from '@store/actions/locationAction'
import { RootState } from '@store/store'
import CheckBox from '@components/common/atoms/CheckBox'
import { Days } from '@constants/Days'
import { IFormProps } from '@components/form/_PropsType'
import InputFiled from '@components/common/atoms/InputFiled'
import GroupSelector from '@components/form/GroupSelector'
import Loading from '@components/common/atoms/loading'
import TextArea from '@components/common/atoms/TextArea'
import FormWrapper from '../FormWrapper'
import { ShopSchema } from './shopSchema'

export interface ISalonFormProps<T> extends IFormProps<T> {
  formValue: Record<string, any>
  watchLocationIds?: string[]
}

const SalonForm = <T extends ShopSchema>({
  submitHandler,
  watchLocationIds,
  formValue,
  formState,
  control,
  error
}: ISalonFormProps<T>) => {
  const dispatch = useDispatch()

  const { area, prefecture, city, loading } = useSelector(
    (state: RootState) => state.location
  )

  const data = {
    areas: Object.values(area).map((area) => ({
      value: String(area.id),
      name: area.name
    })),
    pref: prefecture?.prefectures?.map((pref) => ({
      value: String(pref.id),
      name: pref.name
    })),
    city: city?.cities?.map((city) => ({
      value: String(city.id),
      name: city.name
    })),
    days: Days.map((day) => ({ value: day.name, name: day.name }))
  }

  useEffect(() => {
    dispatch(getArea())
    if (watchLocationIds?.[0] !== '') {
      dispatch(getOnePref(Number(watchLocationIds?.[0])))
    }
    if (watchLocationIds?.[1] !== '') {
      dispatch(getOneCity(Number(watchLocationIds?.[1])))
    }
  }, [dispatch, watchLocationIds?.[0], watchLocationIds?.[1]])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <FormWrapper
          submitHandler={submitHandler}
          text={
            formState?.shop?.id
              ? `${formState?.shop?.name}編集`
              : 'サロン新規登録'
          }
        >
          <InputFiled
            id='salon'
            name='name'
            label='サロン名'
            placeholder='サロン名を入力してください。'
            classes='my-4'
            control={control}
            error={Boolean(error?.name)}
            errorTxt={error?.name?.message}
          />
          <InputFiled
            id='tel'
            label='電話番号'
            placeholder='電話番号を入力してください。'
            name='phoneNumber'
            classes='my-3'
            control={control}
            error={Boolean(error?.phoneNumber)}
            errorTxt={error?.phoneNumber?.message}
          />
          <GroupSelector datas={data} control={control} name='group' />
          <InputFiled
            id='address'
            label='住所'
            placeholder='住所を入力してください。'
            name='address'
            classes='my-3'
            control={control}
            error={Boolean(error?.address)}
            errorTxt={error?.address?.message}
          />
          <TimePicker
            name='time'
            label='営業時間'
            classes='my-3'
            names={['startTime', 'endTime']}
            control={control}
            error={Boolean(error?.startTime) || Boolean(error?.endTime)}
            errorTxt={error?.startTime?.message || error?.endTime?.message}
          />
          <CheckBox
            id='days'
            name='days'
            label='営業日'
            classes='my-3'
            control={control}
            data={data.days}
            checkedData={formValue.days}
            error={Boolean(error?.days)}
            errorTxt={error?.days?.message}
          />
          <InputFiled
            id='seats'
            name='seats'
            label='座席数'
            classes='my-3'
            type='number'
            control={control}
            error={Boolean(error?.seats)}
            errorTxt={error?.seats?.message}
          />
          <TextArea
            control={control}
            name='details'
            label='詳細'
            classes='my-3'
            fullWidth
          />
        </FormWrapper>
      )}
    </>
  )
}

export default React.memo(SalonForm)
