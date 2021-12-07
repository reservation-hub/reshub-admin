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
import InputFiled from '../common/atoms/InputFiled'
import RadioButton, { GENDER_TYPE } from '../common/atoms/RadioButton'
import ErrorMessage from '../common/atoms/ErrorMessage'

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
    <div className='w-[60rem] mx-auto bg-secondary-main p-[3rem] rounded-[.5rem]'>
      <Header
        title={formState?.user ? `${formState.user.email}編集` : '新規登録'}
      />
      <div className='mt-4'>
        <form onSubmit={submitHandler}>
          <InputFiled
            id='email'
            label='メールアドレス'
            autoComplete='off'
            placeholder='メールアドレスを入力してください。'
            classes='my-3'
            name='email'
            value={formValue.email}
            onChange={changeHandlers.input}
            error={error.email}
            errorTxt={VALIDATION_TEXT.EMAIL}
            fullWidth
          />
          <InputFiled
            id='username'
            label='ユーザーネーム'
            autoComplete='off'
            placeholder='ユーザーネームを入力してください。'
            name='username'
            classes='my-3'
            value={formValue.username}
            onChange={changeHandlers.input}
            fullWidth
          />
          <div className='flex justify-between w-full my-3'>
            <InputFiled
              label='性'
              id='firstNameKanji'
              name='firstNameKanji'
              autoComplete='off'
              placeholder='お名前（名字）を入力してください。'
              classes='w-[25.5rem]'
              value={formValue.firstNameKanji}
              onChange={changeHandlers.input}
            />
            <InputFiled
              label='名'
              id='lastNameKanji'
              name='lastNameKanji'
              autoComplete='off'
              placeholder='お名前を入力してください。'
              classes='w-[25.5rem]'
              value={formValue.lastNameKanji}
              onChange={changeHandlers.input}
            />
          </div>
          <div className='flex justify-between w-full my-3'>
            <InputFiled
              label='セイ'
              id='firstNameKana'
              name='firstNameKana'
              autoComplete='off'
              placeholder='お名前（名字）を入力してください。'
              classes='w-[25.5rem]'
              value={formValue.firstNameKana}
              onChange={changeHandlers.input}
            />
            <InputFiled
              label='メイ'
              id='lastNameKana'
              name='lastNameKana'
              autoComplete='off'
              placeholder='お名前を入力してください。'
              classes='w-[25.5rem]'
              value={formValue.lastNameKana}
              onChange={changeHandlers.input}
            />
          </div>
          {!formState?.user && (
            <>
              <InputFiled
                id='password'
                label='パスワード'
                autoComplete='off'
                placeholder='パスワードを入力してください。'
                name='password'
                type='password'
                classes='my-3'
                error={error.password || error.duplicated}
                onChange={changeHandlers.input}
                errorTxt={VALIDATION_TEXT.PASSWORD}
                fullWidth
              />
              <InputFiled
                id='confirm'
                label='パスワード確認'
                autoComplete='off'
                placeholder='確認用パスワードを入力してください。'
                name='confirm'
                type='password'
                classes='my-3'
                error={error.confirm || error.duplicated}
                onChange={changeHandlers.input}
                errorTxt={VALIDATION_TEXT.PASSWORD}
                fullWidth
              />
            </>
          )}
          <RadioButton
            data={GENDER_TYPE}
            id='gender'
            name='gender'
            label='性別'
            classes='my-3'
            onChange={changeHandlers.input}
          />
          <div className='w-full flex justify-between my-3'>
            <DayPicker
              id='year'
              label='年'
              name='birthdayY'
              classes='w-[17.5rem]'
              selectHandler={changeHandlers.input}
              from={1900}
              to={dayjs().year()}
              option={formValue.birthdayY}
            />
            <DayPicker
              id='month'
              label='月'
              name='birthdayM'
              classes='w-[17.5rem]'
              selectHandler={changeHandlers.input}
              from={1}
              to={12}
              option={formValue.birthdayM}
            />
            <DayPicker
              id='day'
              label='日'
              name='birthdayD'
              classes='w-[17.5rem]'
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
          {error.duplicated && (
            <ErrorMessage text={VALIDATION_TEXT.DUPLICATED} />
          )}
          <CustomButton classes='min-w-full min-h-[4.5rem]' disabled={disabled}>
            登録
          </CustomButton>
        </form>
      </div>
    </div>
  )
}

export default React.memo(UserForm)
