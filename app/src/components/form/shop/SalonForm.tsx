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
import FormWrapper from '@components/form/FormWrapper'
import { ShopSchema } from './shopSchema'
import { convertToOptionsType } from '@utils/hooks/useShopSelect'

export interface ISalonFormProps<T> extends IFormProps<T> {
  formValue?: Record<string, any>
  watchLocationIds?: string[]
}

const SalonForm = <T extends ShopSchema>({
  submitHandler,
  onClick,
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

  const items = {
    areas: Object.values(area).map(convertToOptionsType),
    pref: prefecture?.prefectures?.map(convertToOptionsType),
    city: city?.cities?.map(convertToOptionsType),
    days: Days.map(convertToOptionsType)
  }

  const errors = {
    area: error?.areaId,
    prefecture: error?.prefectureId,
    city: error?.cityId
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
          onClick={onClick}
          text={
            formState?.shop?.id
              ? `${formState?.shop?.name}??????`
              : '?????????????????????'
          }
        >
          <InputFiled
            id='salon'
            name='name'
            label='????????????'
            placeholder='??????????????????????????????????????????'
            classes='my-4'
            control={control}
            error={Boolean(error?.name)}
            errorTxt={error?.name?.message}
          />
          <InputFiled
            id='tel'
            label='????????????'
            placeholder='??????????????????????????????????????????'
            name='phoneNumber'
            classes='my-3'
            control={control}
            error={Boolean(error?.phoneNumber)}
            errorTxt={error?.phoneNumber?.message}
          />
          <GroupSelector
            items={items}
            control={control}
            name='group'
            errors={errors}
          />
          <InputFiled
            id='address'
            label='??????'
            placeholder='????????????????????????????????????'
            name='address'
            classes='my-3'
            control={control}
            error={Boolean(error?.address)}
            errorTxt={error?.address?.message}
          />
          <TimePicker
            name='time'
            label='????????????'
            classes='my-3'
            names={['startTime', 'endTime']}
            control={control}
            errors={{
              startTime: error?.startTime,
              endTime: error?.endTime
            }}
            error={Boolean(error?.startTime) || Boolean(error?.endTime)}
            errorTxt={error?.startTime?.message || error?.endTime?.message}
          />
          <CheckBox
            id='days'
            name='days'
            label='?????????'
            classes='my-3'
            control={control}
            item={Days}
            checkedData={formValue?.days}
            error={Boolean(error?.days)}
            errorTxt={error?.days?.message}
          />
          <InputFiled
            id='seats'
            name='seats'
            label='?????????'
            classes='my-3'
            type='number'
            control={control}
            error={Boolean(error?.seats)}
            errorTxt={error?.seats?.message}
          />
          <TextArea
            control={control}
            name='details'
            label='??????'
            classes='my-3'
            fullWidth
          />
        </FormWrapper>
      )}
    </>
  )
}

export default React.memo(SalonForm)
