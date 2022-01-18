import React from 'react'
import InputFiled from '@components/common/atoms/InputFiled'
import FormWrapper from '@components/form/FormWrapper'
import { IFormProps } from '@components/form/_PropsType'

const SettingForm = <T extends Record<string, any>>({
  submitHandler,
  control,
  error
}: IFormProps<T>) => {
  return (
    <FormWrapper submitHandler={submitHandler} text='パスワード変更'>
      <InputFiled
        id='oldPassword'
        name='oldPassword'
        label='現在パスワード'
        classes='my-3'
        type='password'
        control={control}
        error={error?.oldPassword}
        errorTxt={error?.oldPassword?.message}
      />
      <InputFiled
        id='newPassword'
        name='newPassword'
        label='新しいパスワード'
        classes='my-3'
        type='password'
        control={control}
        error={error?.newPassword}
        errorTxt={error?.newPassword?.message}
      />
      <InputFiled
        id='confirmNewPassword'
        name='confirmNewPassword'
        label='パスワード確認'
        classes='my-3'
        type='password'
        control={control}
        error={error?.confirmNewPassword}
        errorTxt={error?.confirmNewPassword?.message}
      />
    </FormWrapper>
  )
}

export default SettingForm
