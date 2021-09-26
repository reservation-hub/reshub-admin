import React, { useEffect } from 'react'
import CustomButton from '@components/common/atoms/CustomButton'
import FormStyle, { StyledInput } from './FormStyle'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import TimePicker from '../common/atoms/TimePicker'
import { useDispatch, useSelector } from 'react-redux'
import { getArea, getOneCity, getOnePref } from '@store/actions/LocationAction'
import { RootState } from '@store/store'
import LocationPicker from '@components/common/atoms/LocationPicker'
import Header from './Header'
import { ISalonFormProps } from './_PropsType'
import { days } from '@components/common/_Constants'
import CheckBox from '@components/common/atoms/CheckBox'

const SalonForm = ({
  submitHandler,
  formValue,
  formState,
  changeHandler,
  startAt,
  endAt,
  selectArea,
  selectPref,
  selectCity,
  checkHandler
}: ISalonFormProps) => {
  const classes = FormStyle()
  const dispatch = useDispatch()
  const disabled = false

  const { area, prefecture, city } = useSelector(
    (state: RootState) => state.location
  )

  const data = {
    areas: area.values,
    pref: prefecture.prefectures,
    city: city.cities,
    days: days
  }

  useEffect(() => {
    dispatch(getArea())
    if (selectArea.option) {
      dispatch(getOnePref(Number(selectArea.option)))
    }
    if (selectPref.option) {
      dispatch(getOneCity(Number(selectPref.option)))
    }
  }, [dispatch, selectArea.option, selectPref.option])

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
              onChange={changeHandler}
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
              onChange={changeHandler}
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
              onChange={changeHandler}
            />
          </div>
          <div className='input-box'>
            <LocationPicker
              data={data}
              area={selectArea}
              pref={selectPref}
              city={selectCity}
            />
          </div>
          <div className='input-box'>
            <div className='label'>
              <span className='font-16'>営業日</span>
            </div>
            <CheckBox
              inputHandler={checkHandler}
              data={data}
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
                selectHandler={startAt.changeHandler}
                classes='w-13 font-16 h-4'
              />
              <span> - </span>
              <TimePicker
                hh={Number(formValue.endTime.hour)}
                mm={Number(formValue.endTime.minute)}
                selectHandler={endAt.changeHandler}
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
          <CustomButton className='submit-button'>登録</CustomButton>
        </form>
      </div>
    </Container>
  )
}

export default SalonForm
