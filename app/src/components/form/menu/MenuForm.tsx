import InputFiled from '@/components/common/atoms/InputFiled'
import TextArea from '@/components/common/atoms/TextArea'
import React from 'react'
import FormWrapper from '../FormWrapper'
import { IFormProps } from '../_PropsType'
import { MenuSchema } from './menuSchema'

const MenuForm = <T extends MenuSchema>({
  submitHandler,
  formState,
  control,
  error
}: IFormProps<T>) => {
  return (
    <FormWrapper
      submitHandler={submitHandler}
      text={
        formState?.menu
          ? `${formState?.menu?.id}編集`
          : 'メニュー作成'
      }
    >
      <InputFiled
        id='name'
        name='name'
        label='メニュー名'
        classes='my-3'
        control={control}
        error={error?.name}
        errorTxt={error?.name?.message}
      />
      <InputFiled
        id='price'
        name='price'
        label='価格'
        classes='my-3'
        control={control}
        error={error?.price}
        errorTxt={error?.price?.message}
      />
      <InputFiled
        id='duration'
        name='duration'
        label='時間'
        classes='my-3'
        type='number'
        control={control}
        error={error?.duration}
        errorTxt={error?.duration?.message}
      />
      <TextArea 
        id='description'
        name='description'
        label='詳細'
        classes='mt-3 mb-10'
        control={control}
      />
    </FormWrapper>
  )
}

export default MenuForm
