import React from 'react'

import { Select, InputLabel, Container, MenuItem } from '@material-ui/core'
import ModalFormStyle, { ModalInput, ModalSelect } from './ModalFormStyle'
import { modalFormProps } from './_PropsType'
import CustomButton from '../common/atoms/CustomButton'

const ModalUserForm = ({
  input,
  setValue,
  onSubmit
}: modalFormProps) => {

  const classes = ModalFormStyle()

  return (
    <React.Fragment>
      <form onSubmit={ onSubmit } className='modalInputForm'>
        <div className='inputBox'>
          <ModalInput
            label='メールアドレス'
            name='email'
            autoComplete='off'
            fullWidth
            variant='outlined'
            value={ input.email }
            onChange={ setValue }
          />
        </div>
        <div className='flexBetweenDiv'>
          <ModalInput
              label='性'
              name='firstnameKanji'
              autoComplete='off'
              variant='outlined'
              className='inputSize'
              value={ input.firstnameKanji }
              onChange={ setValue }
          />
          <ModalInput
              label='名'
              name='lastnameKanji'
              autoComplete='off'
              variant='outlined'
              className='inputSize'
              value={ input.lastnameKanji }
              onChange={ setValue }
          />
        </div>
        <div className='flexBetweenDiv'>
          <ModalInput
              label='セイ'
              name='firstnameKana'
              autoComplete='off'
              variant='outlined'
              className='inputSize'
              value={ input.firstnameKana }
              onChange={ setValue }
          />
          <ModalInput
              label='メイ'
              name='lastnameKana'
              autoComplete='off'
              variant='outlined'
              className='inputSize'
              value={ input.lastnameKana }
              onChange={ setValue }
          />
        </div>
        <div className='inputBox'>
          <ModalInput
            label='パスワード'
            name='password'
            type='password'
            autoComplete='off'
            fullWidth
            variant='outlined'
            value={ input.password }
            onChange={ setValue }
          />
        </div>
        <div className='inputBox'>
          <ModalInput
            label='パスワード確認'
            name='confirm'
            type='password'
            autoComplete='off'
            fullWidth
            variant='outlined'
            value={ input.confirm }
            onChange={ setValue }
          />
        </div>
        <div className='genderRadio'>
          <input
            type="radio"
            id="gender-male"
            name="gender"
            value='male'
            onChange={ setValue }
          />
          <label htmlFor='gender-male' className='inputSize'>男性</label>
          <input
            type="radio"
            id="gender-female"
            name="gender"
            value='female'
            onChange={ setValue }
          />
          <label htmlFor='gender-female' className='inputSize'>女性</label>
        </div>
        <div className='flexBetweenDiv'>
          <ModalInput
              label='年'
              name='birthdayY'
              autoComplete='off'
              variant='outlined'
              className='birthday'
              value={ input.birthdayY }
              onChange={ setValue }
          />
          <ModalInput
              label='月'
              name='birthdayM'
              autoComplete='off'
              variant='outlined'
              className='birthdayMD'
              value={ input.birthdayM }
              onChange={ setValue }
          />
          <ModalInput
              label='日'
              name='birthdayD'
              autoComplete='off'
              variant='outlined'
              className='birthdayMD'
              value={ input.birthdayD }
              onChange={ setValue }
          />
        </div>
        <div className='inputBox'>
          <ModalSelect variant="outlined" >
            <InputLabel id="roles-select-outlined-label">
              権限
            </InputLabel>
            <Select
              labelId="roles-select-outlined-label"
              id="roles-select-outlined"
              label="権限"
              name='role'
              style={{ fontSize: '1.6rem' }}
              value={ input.role }
              onChange={ setValue }
            >
              <MenuItem value='1'>admin</MenuItem>
              <MenuItem value='2'>salon staff</MenuItem>
            </Select>
          </ModalSelect>
        </div>
        <CustomButton className={ classes.submitButton } >
          この情報で登録
        </CustomButton>
      </form>
    </React.Fragment>
  )

}

export default ModalUserForm
