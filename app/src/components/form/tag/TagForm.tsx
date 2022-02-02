import React from 'react'
import { IFormProps } from '@components/form/_PropsType'
import InputFiled from '@components/common/atoms/InputFiled'
import FormWrapper from '@components/form/FormWrapper'
import { TagSchema } from './tagSchema'

export interface IUserFormProps<T> extends IFormProps<T> {
  formValue: Record<string, any>
}

const UserForm = <T extends TagSchema>({
  submitHandler,
  formState,
  error,
  control
}: IUserFormProps<T>) => {
  return (
    <FormWrapper
      submitHandler={submitHandler}
      text={formState?.user ? `${formState.user.id}編集` : '新規登録'}
    >
      <InputFiled
        id='slug'
        label='タグ'
        autoComplete='off'
        placeholder='タグを入力してください'
        classes='my-3'
        name='slug'
        control={control}
        error={error?.slug}
        errorTxt={error?.slug?.message}
        fullWidth
      />
    </FormWrapper>
  )
}

export default React.memo(UserForm)
