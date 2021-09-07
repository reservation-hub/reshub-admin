import React, { useCallback, useEffect, useMemo } from 'react'
import CustomButton from '../common/atoms/CustomButton'
import FormStyle, { StyledInput } from './FormStyle'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import { RouteComponentProps } from 'react-router-dom'
import { MatchParams } from '../user/_PropsType'
import TimePicker from '../common/atoms/TimePicker'
import { useTimePicker } from '../../utils/useTimePicker'
import { useDispatch, useSelector } from 'react-redux'
import { getArea, getOneArea, getOnePref } from '../../store/actions/LocationAction'
import { RootState } from '../../store/store'
import LocationPicker from '../common/atoms/LocationPicker'
import { useSelect } from '../../utils/useSelect'
import Header from './Header'
import useInput from '../../utils/useInput'
import { addShop, editShopData } from '../../store/actions/shopAction'
import { useCheckBox } from '../../utils/useCheckBox'
import { insertShopQuery, updateShopQuery } from '../../utils/api/request-response-types/ShopService'
import DaysChecker from '../common/atoms/DaysChecker'

const SalonForm = ({ match }: RouteComponentProps<MatchParams>) => {
  
  const classes = FormStyle()
  const dispatch = useDispatch()
  
  const startAt = useTimePicker(0)
  const endAt = useTimePicker(0)
  
  const sArea = useSelect('')
  const sPref = useSelect('')
  const sCity = useSelect('')
  
  const { input, ChangeHandler } = useInput({
    name: '', address: '', phoneNumber: ''
  })
  
  const { checked, changeHandler } = useCheckBox([])
  
  const { areas, area, prefecture } = useSelector((state: RootState) => state.location)
  
  const values = {
    areas: areas.values,
    pref: area.prefectures,
    city: prefecture.cities
  }
  
  // todo 後はこっちをhooksとかにする
  const shopData: { insertData: insertShopQuery, updateData: updateShopQuery }
    = useMemo(() => {
      const insertData: insertShopQuery = {
        name: input.name,
        address: input.address,
        phoneNumber: input.phoneNumber,
        startTime: startAt.HHmm,
        endTime: endAt.HHmm,
        areaId: Number(sArea.option),
        prefectureId: Number(sPref.option),
        cityId: Number(sCity.option),
        days: checked
      }
      const updateData: updateShopQuery = {
        id: Number(match.params.id),
        params: {
          name: input.name,
          address: input.address,
          phoneNumber: input.phoneNumber,
          startTime: startAt.HHmm,
          endTime: endAt.HHmm,
          areaId: Number(sArea.option),
          prefectureId: Number(sPref.option),
          cityId: Number(sCity.option),
          days: checked
        }
      }
      return { insertData, updateData }
    },
    [
      checked,
      endAt.HHmm,
      input.address,
      input.name,
      input.phoneNumber,
      match.params.id,
      sArea.option,
      sCity.option,
      sPref.option,
      startAt.HHmm
    ])
  
  const onSubmit = useCallback(
    () => {
      if (match.params.id) {
        dispatch(editShopData(shopData.updateData))
      } else {
        dispatch(addShop(shopData.insertData))
      }
    },
    [dispatch, match.params.id, shopData.insertData, shopData.updateData]
  )
  
  useEffect(() => {
    dispatch(getArea())
    if (sArea.option) {
      dispatch(getOneArea(Number(sArea.option)))
    }
    if (sPref.option) {
      dispatch(getOnePref(Number(sPref.option)))
    }
  }, [dispatch, sArea.option, sPref.option])
  
  return (
    <Container maxWidth='sm' className={ classes.container }>
      <Header
        title={ match.params.id ? 'サロン編集' : 'サロン新規登録' }
      />
      <div className='form-box'>
        <form onSubmit={ onSubmit }>
          <div className='input-box'>
            <StyledInput
              label='サロン名'
              autoComplete='off'
              placeholder='サロン名を入力してください。'
              fullWidth
              variant='outlined'
              name='name'
              value={ input.name }
              onChange={ ChangeHandler }
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
              value={ input.phoneNumber }
              onChange={ ChangeHandler }
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
              value={ input.address }
              onChange={ ChangeHandler }
            />
          </div>
          <div className='input-box'>
            <LocationPicker
              values={ values }
              area={ sArea }
              pref={ sPref }
              city={ sCity }
            />
          </div>
          <div className='input-box'>
            <div className='label'>
              <span className='font-16'>営業日</span>
            </div>
            <DaysChecker inputHandler={ changeHandler } />
          </div>
          <div className='input-box'>
            <div className='label'>
              <span className='font-16'>営業時間</span>
            </div>
            <div className='display-flex justify-between align-center'>
              <TimePicker
                hh={ startAt.hour }
                mm={ startAt.minute }
                selectHandler={ startAt.changeHandler }
                classes='w-13 font-16 h-4'
              />
              <span> - </span>
              <TimePicker
                hh={ endAt.hour }
                mm={ endAt.minute }
                selectHandler={ endAt.changeHandler }
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
              rows={ 4 }
              variant='outlined'
            />
          </div>
          <CustomButton className='submit-button'>
            登録
          </CustomButton>
        </form>
      </div>
    </Container>
  )
}

export default SalonForm
