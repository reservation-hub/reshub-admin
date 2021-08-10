import React, { ChangeEventHandler, FormEvent, FormEventHandler, useCallback } from 'react'

import { TextField, Select, InputLabel, Container, MenuItem, FormControl } from '@material-ui/core'
import ModalFormStyle from './ModalFormStyle'
import moment from 'moment'

interface modalFormProps {
  input: {
    email: string
    password: string
    firstnameKanji: string
    lastnameKanji: string
    firstnameKana: string
    lastnameKana: string
    gender: string
    birthdayY: string
    birthdayM: string
    birthdayD: string
    role: string
  }
  setValue: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | { value: unknown }>
  onSubmit: FormEventHandler<HTMLFormElement>
}

const ModalUserForm = ({
  input,
  setValue,
  onSubmit
}: modalFormProps) => {
  // todo モーダルフォーム作成
  const classes = ModalFormStyle()

  return (
    <Container className={ classes.modalContainer }>
      <form onSubmit={ onSubmit } className={ classes.modalInputForm }>
        <TextField
            label='メールアドレス'
            name='email'
            autoComplete='off'
            fullWidth
            variant='outlined'
            value={ input.email }
            onChange={ setValue }
        />
        <div className={ classes.flexBetweenDiv }>
          <TextField
              label='性'
              name='firstnameKanji'
              autoComplete='off'
              variant='outlined'
              value={ input.firstnameKanji }
              onChange={ setValue }
          />
          <TextField
              label='名'
              name='lastnameKanji'
              autoComplete='off'
              variant='outlined'
              value={ input.lastnameKanji }
              onChange={ setValue }
          />
        </div>
        <div className={ classes.flexBetweenDiv }>
          <TextField
              label='セイ'
              name='firstnameKana'
              autoComplete='off'
              variant='outlined'
              value={ input.firstnameKana }
              onChange={ setValue }
          />
          <TextField
              label='メイ'
              name='lastnameKana'
              autoComplete='off'
              variant='outlined'
              value={ input.lastnameKana }
              onChange={ setValue }
          />
        </div>
        <TextField
            label='パスワード'
            name='password'
            type='password'
            autoComplete='off'
            fullWidth
            variant='outlined'
            value={ input.password }
            onChange={ setValue }
        />
        <div className={ classes.genderRadio }>
          <input
            type="radio"
            id="gender-male"
            name="gender"
            value='male'
            onChange={ setValue }
          />
          <label htmlFor='gender-male'>男性</label>
          <input
            type="radio"
            id="gender-female"
            name="gender"
            value='female'
            onChange={ setValue }
          />
          <label htmlFor='gender-female'>女性</label>
        </div>
        <div className={ classes.flexBetweenDiv }>
          <TextField
              label='年'
              name='birthdayY'
              autoComplete='off'
              variant='outlined'
              value={ input.birthdayY }
              onChange={ setValue }
          />
          <TextField
              label='月'
              name='birthdayM'
              autoComplete='off'
              variant='outlined'
              value={ input.birthdayM }
              onChange={ setValue }
          />
          <TextField
              label='日'
              name='birthdayD'
              autoComplete='off'
              variant='outlined'
              value={ input.birthdayD }
              onChange={ setValue }
          />
        </div>
        <div className='access-role'>
          <FormControl variant="outlined" >
            <InputLabel id="roles-select-outlined-label">
              権限
            </InputLabel>
            <Select
              labelId="roles-select-outlined-label"
              id="roles-select-outlined"
              label="権限"
              name='role'
              value={ input.role }
              onChange={ setValue }
            >
              <MenuItem value='1'>admin</MenuItem>
              <MenuItem value='2'>salon staff</MenuItem>
            </Select>
          </FormControl>
        </div>
        <button className={ classes.submitButton } >この情報で登録</button>
      </form>
    </Container>
  )
}

export default ModalUserForm
