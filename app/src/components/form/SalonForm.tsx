import React, { useEffect } from 'react'
import CustomButton from '@components/common/atoms/CustomButton'
import FormStyle, { StyledInput } from './FormStyle'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import TimePicker from '../common/atoms/TimePicker'
import { useDispatch, useSelector } from 'react-redux'
import { getArea, getOneCity, getOnePref } from '@store/actions/LocationAction'
import { RootState } from '@store/store'
import Header from './Header'
import { ISalonFormProps } from './_PropsType'
import CheckBox from '@components/common/atoms/CheckBox'
import Selector from '@components/common/atoms/Selector'
import { Days } from '@constants/Days'

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
    <Container maxWidth='sm' className={classes.container}>
      <Header title={formState?.shop?.id ? 'サロン編集' : 'サロン新規登録'} />
      <div className='form-box'>
        <form onSubmit={submitHandler}>
          <div className='input-box'>
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
          <div className='input-box'>
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
          <div className='input-box'>
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
          <div className='input-box display-flex'>
            <Selector
              id='area'
              name='areaId'
              option={formValue.areaId}
              selectHandler={changeHandlers.input}
              data={data.areas}
              label='エリア'
            />
            <Selector
              id='pref'
              name='prefectureId'
              option={formValue.prefectureId}
              selectHandler={changeHandlers.input}
              data={data.pref}
              label='都道府県'
            />
            <Selector
              id='city'
              name='cityId'
              option={formValue.cityId}
              selectHandler={changeHandlers.input}
              data={data.city}
              label='市区町村'
            />
          </div>
          <div className='input-box'>
            <div className='label'>
              <span className='font-16'>営業日</span>
            </div>
            <CheckBox
              inputHandler={changeHandlers.check}
              data={Days}
              checkedData={formValue.days}
            />
          </div>
          <div className='input-box'>
            <div className='label'>
              <span className='font-16'>営業時間</span>
            </div>
            <div className='display-flex justify-between align-center'>
              <TimePicker
                hh={Number(formValue.startTime.hour)}
                mm={Number(formValue.startTime.minute)}
                selectHandler={changeHandlers.startAt}
                classes='w-13 font-16 h-4'
              />
              <span> - </span>
              <TimePicker
                hh={Number(formValue.endTime.hour)}
                mm={Number(formValue.endTime.minute)}
                selectHandler={changeHandlers.endAt}
                classes='w-13 font-16 h-4'
              />
            </div>
          </div>
          <div className='input-box'>
            <CustomButton>画像登録になる</CustomButton>
          </div>
          <div className='input-box'>
            <TextField
              label='詳細'
              autoComplete='off'
              fullWidth
              multiline
              rows={4}
              variant='outlined'
            />
          </div>
          <CustomButton
            disabled={disabled}
            className={disabled ? 'disabled-button' : 'submit-button'}
          >
            登録
          </CustomButton>
        </form>
      </div>
    </Container>
  )
}

export default SalonForm
