import React, { useEffect } from 'react'
import CustomButton from '@components/common/atoms/CustomButton'
import TimePicker from '@components/common/atoms/TimePicker'
import { useDispatch, useSelector } from 'react-redux'
import { getArea, getOneCity, getOnePref } from '@store/actions/locationAction'
import { RootState } from '@store/store'
import Header from './Header'
import CheckBox from '@components/common/atoms/CheckBox'
import { Days } from '@constants/Days'
import { IFormProps, TSalonInput } from './_PropsType'
import InputFiled from '@components/common/atoms/InputFiled'
import GroupSelector from './GroupSelector'
import Loading from '@components/common/atoms/loading'

export interface ISalonFormProps extends IFormProps {
  formValue: TSalonInput
}

const SalonForm = ({
  submitHandler,
  formValue,
  formState,
  changeHandlers
}: ISalonFormProps) => {
  const dispatch = useDispatch()
  let disabled = false

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

  if (
    formValue.name.length === 0 ||
    formValue.address.length === 0 ||
    formValue.phoneNumber.length === 0 ||
    formValue.areaId.length === 0 ||
    formValue.prefectureId.length === 0 ||
    formValue.cityId.length === 0 ||
    formValue.days.length === 0 ||
    formValue.startTime.hour.length === 0 ||
    formValue.endTime.hour.length === 0
  ) {
    disabled = !disabled
  }

  useEffect(() => {
    dispatch(getArea())
    if (formValue.areaId) {
      dispatch(getOnePref(Number(formValue.areaId)))
    }
    if (formValue.prefectureId) {
      dispatch(getOneCity(Number(formValue.prefectureId)))
    }
  }, [dispatch, formValue.areaId, formValue.prefectureId])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='p-[2rem] bg-secondary-main w-[60rem] mx-auto'>
          <Header
            title={
              formState?.shop?.id
                ? `${formState?.shop?.name}編集`
                : 'サロン新規登録'
            }
          />
          <div className='mt-4'>
            <form onSubmit={submitHandler}>
              <div className='my-3'>
                <CustomButton>画像登録になる</CustomButton>
              </div>
              <InputFiled
                id='salon'
                label='サロン名'
                autoComplete='off'
                placeholder='サロン名を入力してください。'
                name='name'
                classes='my-3'
                value={formValue.name}
                onChange={changeHandlers.input}
              />
              <InputFiled
                id='tel'
                label='電話番号'
                autoComplete='off'
                placeholder='電話番号を入力してください。'
                name='phoneNumber'
                classes='my-3'
                value={formValue.phoneNumber}
                onChange={changeHandlers.input}
              />
              <div className='my-3 flex justify-between text-[1.6rem]'>
                <GroupSelector
                  groupType='location'
                  datas={data}
                  values={[
                    formValue.areaId,
                    formValue.prefectureId,
                    formValue.cityId
                  ]}
                  onChange={changeHandlers.input}
                />
              </div>
              <InputFiled
                id='address'
                label='住所（詳細）'
                autoComplete='off'
                placeholder='住所を入力してください。'
                name='address'
                classes='my-3'
                value={formValue.address}
                onChange={changeHandlers.input}
              />
              <div className='my-3'>
                <span className='text-table-headerFont text-[1.6rem]'>
                  営業日
                </span>
                <CheckBox
                  onChange={changeHandlers.check}
                  data={data.days}
                  checkedData={formValue.days}
                />
              </div>
              <div className='my-3'>
                <span className='text-table-headerFont text-[1.6rem]'>
                  営業時間
                </span>
                <div className='flex justify-between items-center'>
                  <TimePicker
                    hh={Number(formValue.startTime.hour)}
                    mm={Number(formValue.startTime.minute)}
                    onChange={changeHandlers.startAt}
                  />
                  <span> - </span>
                  <TimePicker
                    hh={Number(formValue.endTime.hour)}
                    mm={Number(formValue.endTime.minute)}
                    onChange={changeHandlers.endAt}
                  />
                </div>
              </div>
              <div className='my-3'>
                <label
                  htmlFor='details'
                  className='text-table-headerFont text-[1.6rem]'
                >
                  詳細
                </label>
                <textarea
                  name='details'
                  autoComplete='off'
                  id='details'
                  className='w-full p-3 h-[10rem] border resize-none'
                  onChange={changeHandlers.input}
                />
              </div>
              <CustomButton disabled={disabled} classes='min-w-full'>
                登録
              </CustomButton>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default React.memo(SalonForm)
