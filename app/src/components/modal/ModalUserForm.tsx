import React from 'react'
import { ChangeEventHandler, FormEvent, useCallback } from 'react'
import { Select, InputLabel, MenuItem, FormHelperText } from '@material-ui/core'
import moment from 'moment'
import { useForm } from "react-hook-form"
import ModalFormStyle, { ModalInput, ModalSelect } from './ModalFormStyle'
import CustomButton from '../common/atoms/CustomButton'
import useInput from '../../utils/useInput'

interface IUserFormInput {
  email: string
  lastNameKanji: string
  firstNameKanji: string
  lastNameKana: string
  firstNameKana: string
  password: string
  confirm: string
  gender: string
  birthdayY: string
  birthdayM: string
  birthdayD: string
  role: string
}

const ModalUserForm = () => {
  const { register, setError, formState: { errors } } = useForm<IUserFormInput>({mode: 'onBlur'})
  const classes = ModalFormStyle()
  const { input, ChangeHandler } = useInput({
    email: '',
    password: '',
    confirm: '',
    firstNameKanji: '',
    lastNameKanji: '',
    firstNameKana: '',
    lastNameKana: '',
    gender: '',
    birthdayY: '',
    birthdayM: '',
    birthdayD: '',
    role: ['']
  })

  const body = {
    email: input.email,
    password: input.password,
    confirm: input.confirm,
    firstNameKanji: input.firstNameKanji,
    lastNameKanji: input.lastNameKanji,
    firstNameKana: input.firstNameKana,
    lastNameKana: input.lastNameKana,
    gender: input.gender,
    birthday: moment(
      `${ input.birthdayY }/${ input.birthdayM }/${ input.birthdayD }`,
      'YYYY-MM-DD'
    ).format('YYYY-MM-DD'),
    roleIds: [Number(input.role)]
  }

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log(body)
      // dispatch(addUser(body))
    }, []
  )

  return (
    <React.Fragment>
      <form onSubmit={ onSubmit } className='modalInputForm'>
        <div className='inputBox'>
          <ModalInput
            {...register('email', {
              required: "入力してください",
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: '正しいメールを入力してください'
              } 
            })}
            label='メールアドレス'
            name='email'
            autoComplete='off'
            fullWidth
            variant='outlined'
            value={ input.email }
            error={ !!errors.email }
            helperText={ errors.email?.message }
            onChange={ ChangeHandler }
          />
        </div>
        <div className='inputBox'>
          <div className='flexBetweenDiv'>
            <ModalInput
              {...register('firstNameKanji', { required: '入力してください' })}
              label='性'
              name='firstNameKanji'
              autoComplete='off'
              variant='outlined'
              className='inputSize'
              error={ !!errors.firstNameKanji }
              helperText={ errors.firstNameKanji?.message }
              value={ input.firstNameKanji }
              onChange={ ChangeHandler }
            />
            <ModalInput
              {...register('lastNameKanji', { required: '入力してください' })}
              label='名'
              name='lastNameKanji'
              autoComplete='off'
              variant='outlined'
              className='inputSize'
              error={ !!errors.lastNameKanji }
              helperText={ errors.lastNameKanji?.message }
              value={ input.lastNameKanji }
              onChange={ ChangeHandler }
            />
          </div>
        </div>
        <div className='flexBetweenDiv'>
          <ModalInput
            {...register('firstNameKana', {
              required: '入力してください',
              pattern: {
                value: /^[\u30A0-\u30FF]+$/,
                message: 'カタカナで入力してください'
              }
            })}
            label='セイ'
            name='firstNameKana'
            autoComplete='off'
            variant='outlined'
            className='inputSize'
            error={ !!errors.firstNameKana }
            helperText={ errors.firstNameKana?.message }
            value={ input.firstNameKana }
            onChange={ ChangeHandler }
          />
          <ModalInput
            {...register('lastNameKana', {
              required: '入力してください',
              pattern: {
                value: /^[\u30A0-\u30FF]+$/,
                message: 'カタカナで入力してください'
              }
            })}
            label='メイ'
            name='lastNameKana'
            autoComplete='off'
            variant='outlined'
            className='inputSize'
            error={ !!errors.lastNameKana }
            helperText={ errors.lastNameKana?.message }
            value={ input.lastNameKana }
            onChange={ ChangeHandler }
          />
        </div>
        <div className='inputBox'>
          <ModalInput
            {...register('password', { required: '入力してください' })}
            label='パスワード'
            name='password'
            type='password'
            autoComplete='off'
            fullWidth
            variant='outlined'
            error={ !!errors.password }
            helperText={ errors.password?.message }
            value={ input.password }
            onChange={ ChangeHandler }
          />
        </div>
        <div className='inputBox'>
          <ModalInput
            {...register('confirm', { required: '入力してください' })}
            label='パスワード確認'
            name='confirm'
            type='password'
            autoComplete='off'
            fullWidth
            variant='outlined'
            error={ !!errors.confirm }
            helperText={ errors.confirm?.message }
            value={ input.confirm }
            onChange={ ChangeHandler }
          />
        </div>
        <div className='genderRadio'>
          <input
            type="radio"
            id="gender-male"
            name="gender"
            value='male'
            onChange={ ChangeHandler }
          />
          <label htmlFor='gender-male' className='inputSize'>男性</label>
          <input
            type="radio"
            id="gender-female"
            name="gender"
            value='female'
            onChange={ ChangeHandler }
          />
          <label htmlFor='gender-female' className='inputSize'>女性</label>
        </div>
        <div className='flexBetweenDiv'>
          <ModalInput
            {...register('birthdayY', { required: '入力してください' })}
            label='年'
            name='birthdayY'
            autoComplete='off'
            variant='outlined'
            className='birthday'
            error={ !!errors.birthdayY }
            helperText={ errors.birthdayY?.message }
            value={ input.birthdayY }
            onChange={ ChangeHandler }
          />
          <ModalInput
            {...register('birthdayM', { required: '入力してください' })}
            label='月'
            name='birthdayM'
            autoComplete='off'
            variant='outlined'
            className='birthdayMD'
            error={ !!errors.birthdayM }
            helperText={ errors.birthdayM?.message }
            value={ input.birthdayM }
            onChange={ ChangeHandler }
          />
          <ModalInput
            {...register('birthdayD', { required: '入力してください' })}
            label='日'
            name='birthdayD'
            autoComplete='off'
            variant='outlined'
            className='birthdayMD'
            error={ !!errors.birthdayD }
            helperText={ errors.birthdayD?.message }
            value={ input.birthdayD }
            onChange={ ChangeHandler }
          />
        </div>
        <div className='inputBox'>
          <ModalSelect variant="outlined"
          >
            <InputLabel id="roles-select-outlined-label" error={ !!errors.role }>
              権限
            </InputLabel>
            <Select
              {...register('role', { required: '選んでください' })}
              labelId="roles-select-outlined-label"
              id="roles-select-outlined"
              name='role'
              style={{ fontSize: '1.6rem' }}
              value={ input.role }
              error={ !!errors.role }
              onChange={ ChangeHandler as ChangeEventHandler<{ name?: string | undefined, value: unknown}>}
              onBlur={(data) => {
                console.log(data.target.value.length)
                if (!data.target.value[0]) {
                  setError('role', {
                    type: 'required',
                    message: '選んでください'
                  }) 
                }
              }}
            >
              {/* TODO: ここはapiからroleのリストを取得してここで使うようにするのが適切 */}
              <MenuItem value='1'>admin</MenuItem>
              <MenuItem value='2'>salon staff</MenuItem>
            </Select>
            <FormHelperText style={{color: 'red'}}>{ errors.role?.message }</FormHelperText>
          </ModalSelect>
        </div>
        <CustomButton className={ classes.submitButton } disabled={Object.keys(errors).length > 0 }>
          この情報で登録
        </CustomButton>
      </form>
    </React.Fragment>
  )

}

export default ModalUserForm
