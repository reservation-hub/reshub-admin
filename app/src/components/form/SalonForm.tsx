import React, { useEffect } from 'react'
import CustomButton from '@components/common/atoms/CustomButton'
import FormStyle, { StyledInput } from './FormStyle'
import TextField from '@material-ui/core/TextField'
import TimePicker from '../common/atoms/TimePicker'
import { useDispatch, useSelector } from 'react-redux'
import { getArea, getOneCity, getOnePref } from '@store/actions/LocationAction'
import { RootState } from '@store/store'
import Header from './Header'
import CheckBox from '@components/common/atoms/CheckBox'
import Selector from '@components/common/atoms/Selector'
import { Days } from '@constants/Days'
import { IFormProps, TSalonInput } from './_PropsType'

export interface ISalonFormProps extends IFormProps {
  formValue: TSalonInput
}

const SalonForm = ({
  submitHandler,
  formValue,
  formState,
  changeHandlers
}: ISalonFormProps) => {
  const classes = FormStyle()
  const dispatch = useDispatch()
  let disabled = false

  const { area, prefecture, city } = useSelector(
    (state: RootState) => state.location
  )

  const data = {
    areas: area.values,
    pref: prefecture.prefectures,
    city: city.cities,
    days: Days
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
    <div className='p-[2rem] bg-secondary-main w-[60rem] mx-auto'>
      <Header title={formState?.shop?.id ? 'サロン編集' : 'サロン新規登録'} />
      <div className='mt-[2rem]'>
        <form onSubmit={submitHandler}>
          <div className='mb-[2rem]'>
            <StyledInput
              label='サロン名'
              autoComplete='off'
              placeholder='サロン名を入力してください。'
              fullWidth
              variant='outlined'
              name='name'
              value={formValue.name}
              onChange={changeHandlers.input}
            />
          </div>
          <div className='mb-[2rem]'>
            <StyledInput
              label='電話番号'
              autoComplete='off'
              placeholder='電話番号を入力してください。'
              fullWidth
              variant='outlined'
              name='phoneNumber'
              value={formValue.phoneNumber}
              onChange={changeHandlers.input}
            />
          </div>
          <div className='mb-[2rem]'>
            <StyledInput
              label='住所'
              autoComplete='off'
              placeholder='住所を入力してください。'
              fullWidth
              variant='outlined'
              name='address'
              value={formValue.address}
              onChange={changeHandlers.input}
            />
          </div>
          <div className='mb-[2rem] flex justify-between'>
            <Selector
              id='area'
              name='areaId'
              value={formValue.areaId}
              onChange={changeHandlers.input}
              data={data.areas}
              label='エリア'
            />
            <Selector
              id='pref'
              name='prefectureId'
              value={formValue.prefectureId}
              onChange={changeHandlers.input}
              data={data.pref}
              label='都道府県'
            />
            <Selector
              id='city'
              name='cityId'
              value={formValue.cityId}
              onChange={changeHandlers.input}
              data={data.city}
              label='市区町村'
            />
          </div>
          <div className='mb-[2rem]'>
            <div className='label'>
              <span className='font-16'>営業日</span>
            </div>
            <CheckBox
              onChange={changeHandlers.check}
              data={Days}
              checkedData={formValue.days}
            />
          </div>
          <div className='mb-[2rem]'>
            <div className='label'>
              <span className='font-16'>営業時間</span>
            </div>
            <div className='flex justify-between items-center'>
              <TimePicker
                hh={Number(formValue.startTime.hour)}
                mm={Number(formValue.startTime.minute)}
                onChange={changeHandlers.startAt}
                classes='w-13 font-16 h-4'
              />
              <span> - </span>
              <TimePicker
                hh={Number(formValue.endTime.hour)}
                mm={Number(formValue.endTime.minute)}
                onChange={changeHandlers.endAt}
                classes='w-13 font-16 h-4'
              />
            </div>
          </div>
          <div className='mb-[2rem]'>
            <CustomButton>画像登録になる</CustomButton>
          </div>
          <div className='mb-[2rem]'>
            <TextField
              label='詳細'
              autoComplete='off'
              fullWidth
              multiline
              rows={4}
              variant='outlined'
              name='details'
              value={formValue.details}
              onChange={changeHandlers.input}
            />
          </div>
          <CustomButton
            disabled={disabled}
            classes={
              disabled
                ? 'w-[56rem] h-[4.5rem] mt-[.5rem]'
                : 'w-[56rem] h-[4.5rem] mt-[.5rem]'
            }
          >
            登録
          </CustomButton>
        </form>
      </div>
    </div>
  )
}

export default React.memo(SalonForm)
