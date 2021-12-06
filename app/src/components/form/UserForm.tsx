import React from 'react'
import Header from './Header'
import FormStyle, { StyledInput } from './FormStyle'
import CustomButton from '@components/common/atoms/CustomButton'
import { IFormProps, TUserInput } from './_PropsType'
import { VALIDATION_TEXT } from '@constants/FormValid'
import DayPicker from '@components/common/atoms/DayPicker'
import dayjs from 'dayjs'
import Selector from '@components/common/atoms/Selector'
import { ROLES } from '@constants/Roles'
import { TValid } from '@/utils/hooks/useValidation'

export interface IUserFormProps extends IFormProps {
  validation?: Record<string, any>
  formValue: TUserInput
  error: TValid
}

const UserForm = ({
  submitHandler,
  formState,
  formValue,
  changeHandlers,
  error
}: IUserFormProps) => {
  const classes = FormStyle()
  let disabled = false

  for (const value of Object.values(formValue)) {
    disabled = value.length === 0
  }

  return (
    <div className={classes.container}>
      <Header
        title={formState?.user ? `${formState.user.email}編集` : '新規登録'}
      />
      <div className='form-box'>
        <form onSubmit={submitHandler}>
          <div className='input-box'>
            <StyledInput
              label='メールアドレス'
              autoComplete='off'
              placeholder='メールアドレスを入力してください。'
              fullWidth
              variant='outlined'
              name='email'
              value={formValue.email}
              error={error.email}
              onChange={changeHandlers.input}
              onBlur={changeHandlers.input}
              helperText={error.email && VALIDATION_TEXT.EMAIL}
            />
          </div>
          <div className='input-box'>
            <StyledInput
              label='ユーザーネーム'
              autoComplete='off'
              placeholder='ユーザーネームを入力してください。'
              fullWidth
              variant='outlined'
              name='username'
              onChange={changeHandlers.input}
            />
          </div>
          <div className='input-box display-flex'>
            <StyledInput
              label='性'
              autoComplete='off'
              placeholder='お名前（名字）を入力してください。'
              variant='outlined'
              name='firstNameKanji'
              className='kanji-kana-name'
              value={formValue.firstNameKanji}
              onChange={changeHandlers.input}
              onBlur={changeHandlers.input}
            />
            <StyledInput
              label='名'
              autoComplete='off'
              placeholder='お名前を入力してください。'
              variant='outlined'
              name='lastNameKanji'
              className='kanji-kana-name'
              value={formValue.lastNameKanji}
              onChange={changeHandlers.input}
              onBlur={changeHandlers.input}
            />
          </div>
          <div className='input-box display-flex'>
            <StyledInput
              label='セイ'
              autoComplete='off'
              placeholder='お名前（名字）を入力してください。'
              variant='outlined'
              name='firstNameKana'
              className='kanji-kana-name'
              value={formValue.firstNameKana}
              error={error.firstNameKana}
              onChange={changeHandlers.input}
              onBlur={changeHandlers.input}
              helperText={error.firstNameKana && VALIDATION_TEXT.KANA_NAME}
            />
            <StyledInput
              label='メイ'
              autoComplete='off'
              placeholder='お名前を入力してください。'
              variant='outlined'
              name='lastNameKana'
              className='kanji-kana-name'
              value={formValue.lastNameKana}
              error={error.lastNameKana}
              onChange={changeHandlers.input}
              onBlur={changeHandlers.input}
              helperText={error.lastNameKana && VALIDATION_TEXT.KANA_NAME}
            />
          </div>
          {!formState?.user && (
            <>
              <div className='input-box'>
                <StyledInput
                  label='パスワード'
                  autoComplete='off'
                  placeholder='パスワードを入力してください。'
                  fullWidth
                  variant='outlined'
                  name='password'
                  type='password'
                  error={error.password || error.duplicated}
                  onChange={changeHandlers.input}
                  onBlur={changeHandlers.input}
                  helperText={error.password && VALIDATION_TEXT.PASSWORD}
                />
              </div>
              <div className='input-box'>
                <StyledInput
                  label='パスワード確認'
                  autoComplete='off'
                  placeholder='確認用パスワードを入力してください。'
                  fullWidth
                  variant='outlined'
                  name='confirm'
                  type='password'
                  error={error.confirm || error.duplicated}
                  onChange={changeHandlers.input}
                  onBlur={changeHandlers.input}
                  helperText={error.confirm && VALIDATION_TEXT.PASSWORD}
                />
              </div>
            </>
          )}
          <div className='input-box genderRadio display-flex'>
            <input
              type='radio'
              id='genderMale'
              name='gender'
              value='male'
              onChange={changeHandlers.input}
            />
            <label htmlFor='genderMale'>男性</label>
            <input
              type='radio'
              id='genderFemale'
              name='gender'
              value='female'
              onChange={changeHandlers.input}
            />
            <label htmlFor='genderFemale'>女性</label>
            <input
              type='radio'
              id='genderOther'
              name='gender'
              value='other'
              onChange={changeHandlers.input}
            />
            <label htmlFor='genderOther'>その他</label>
          </div>
          <div className='input-box display-flex'>
            <DayPicker
              id='year'
              label='年'
              name='birthdayY'
              classes='birthday'
              selectHandler={changeHandlers.input}
              from={1900}
              to={dayjs().year()}
              option={formValue.birthdayY}
            />
            <DayPicker
              id='month'
              label='月'
              name='birthdayM'
              classes='birthday'
              selectHandler={changeHandlers.input}
              from={1}
              to={12}
              option={formValue.birthdayM}
            />
            <DayPicker
              id='day'
              label='日'
              name='birthdayD'
              classes='birthday'
              selectHandler={changeHandlers.input}
              from={1}
              to={31}
              option={formValue.birthdayD}
            />
          </div>
          <div className='input-box'>
            <Selector
              id='role'
              name='role'
              option={formValue.role}
              selectHandler={changeHandlers.input}
              data={ROLES}
              label='権限'
            />
          </div>
          {error.duplicated && VALIDATION_TEXT.DUPLICATED}
          <CustomButton
            classes={disabled ? 'disabled-button' : 'submit-button'}
            disabled={disabled}
          >
            登録
          </CustomButton>
        </form>
      </div>
    </div>
  )
}

export default UserForm
