import React from 'react'
import Header from '../Header'
import CustomButton from '@components/common/atoms/CustomButton'
import { IFormProps } from '../_PropsType'
import { VALIDATION_TEXT } from '@/constants/FormValid'
import Selector from '@components/common/atoms/Selector'
import { ROLES } from '@constants/Roles'
import InputFiled from '@components/common/atoms/InputFiled'
import RadioButton from '@components/common/atoms/RadioButton'
import ErrorMessage from '@components/common/atoms/ErrorMessage'
import { GENDER_TYPE } from '@constants/Gender'
import { UserSchema } from '../validation/validationSchema'

export interface IUserFormProps<T> extends IFormProps<T> {
  formValue: Record<string, any>
}

const UserForm = <T extends UserSchema>({
  submitHandler,
  formState,
  error,
  control
}: IUserFormProps<T>) => {
  return (
    <div className='w-[60rem] mx-auto bg-secondary-main p-[3rem] rounded-[.5rem]'>
      <Header
        title={formState?.user ? `${formState.user.id}編集` : '新規登録'}
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
            control={control}
            error={error?.email}
            errorTxt={error?.email?.message}
            fullWidth
          />
          <InputFiled
            id='username'
            label='ユーザーネーム'
            autoComplete='off'
            placeholder='ユーザーネームを入力してください。'
            name='username'
            classes='my-3'
            control={control}
            error={error?.username}
            errorTxt={error?.username?.message}
            fullWidth
          />
          <div className='flex justify-between w-full my-3'>
            <InputFiled
              label='セイ'
              id='firstNameKana'
              name='firstNameKana'
              autoComplete='off'
              placeholder='お名前（カタカナ）を入力してください。'
              classes='w-[25.5rem]'
              control={control}
              error={error?.firstNameKana}
              errorTxt={error?.firstNameKana?.message}
            />
            <InputFiled
              label='メイ'
              id='lastNameKana'
              name='lastNameKana'
              autoComplete='off'
              placeholder='お名前（カタカナ）を入力してください。'
              classes='w-[25.5rem]'
              control={control}
              error={error?.lastNameKana}
              errorTxt={error?.lastNameKana?.message}
            />
          </div>
          {!formState?.user && (
            <>
              <div className='flex justify-between w-full my-3'>
                <InputFiled
                  label='氏'
                  id='firstNameKanji'
                  name='firstNameKanji'
                  autoComplete='off'
                  placeholder='お名前（氏）を入力してください。'
                  classes='w-[25.5rem]'
                  control={control}
                  error={error?.firstNameKanji}
                  errorTxt={error?.firstNameKanji?.message}
                />
                <InputFiled
                  label='名'
                  id='lastNameKanji'
                  name='lastNameKanji'
                  autoComplete='off'
                  placeholder='お名前（名）を入力してください。'
                  classes='w-[25.5rem]'
                  control={control}
                  error={error?.lastNameKanji}
                  errorTxt={error?.lastNameKanji?.message}
                />
              </div>
              <InputFiled
                id='password'
                label='パスワード'
                autoComplete='off'
                placeholder='パスワードを入力してください。'
                name='password'
                type='password'
                classes='my-3'
                control={control}
                error={error?.password}
                errorTxt={error?.password?.message}
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
                control={control}
                error={error?.confirm}
                errorTxt={error?.confirm?.message}
                fullWidth
              />
            </>
          )}
          <RadioButton
            id='gender'
            name='gender'
            label='性別'
            classes='my-3'
            control={control}
            data={GENDER_TYPE}
          />
          <InputFiled
            id='birthday'
            name='birthday'
            label='生年月日'
            type='date'
            classes='my-3'
            control={control}
          />
          <Selector
            id='role'
            name='roleSlug'
            label='権限'
            data={ROLES.map((role) => ({ value: role.slug, name: role.name }))}
            control={control}
          />
          <CustomButton classes='min-w-full min-h-[4.5rem] mt-[2rem]'>
            登録
          </CustomButton>
        </form>
      </div>
    </div>
  )
}

export default React.memo(UserForm)
