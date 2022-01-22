import React from 'react'
import CheckBox from '@components/common/atoms/CheckBox'
import InputFiled from '@components/common/atoms/InputFiled'
import TimePicker from '@components/common/atoms/TimePicker'
import { Days } from '@constants/Days'
import FormWrapper from '@components/form/FormWrapper'
import { IFormProps } from '@components/form/_PropsType'
import { StylistSchema } from './stylistSchema'

const StylistForm = <T extends StylistSchema>({
  submitHandler,
  formState,
  control,
  error
}: IFormProps<T>) => {
  return (
    <FormWrapper
      submitHandler={submitHandler}
      text={
        formState?.stylist
          ? `${formState?.stylist?.id}編集`
          : 'スタイリスト登録'
      }
    >
      <InputFiled
        id='name'
        name='name'
        label='スタイリスト名'
        classes='my-3'
        control={control}
        error={error?.name}
        errorTxt={error?.name?.message}
      />
      <InputFiled
        id='price'
        name='price'
        label='指名料'
        classes='my-3'
        type='number'
        control={control}
        error={error?.price}
        errorTxt={error?.price?.message}
      />
      <CheckBox
        id='days'
        label='出勤日'
        classes='my-3'
        name='days'
        control={control}
        item={Days.map((day) => ({ value: day.name, label: day.name }))}
        error={error?.days}
        errorTxt={error?.days?.message}
      />
      <TimePicker
        id='time'
        name='time'
        label='出勤時間'
        classes='mt-3 mb-10'
        names={['startTime', 'endTime']}
        control={control}
        errors={{
          startTime: error?.startTime,
          endTime: error?.endTime
        }}
        error={error?.startTime || error?.endTime}
        errorTxt={error?.startTime?.message || error?.endTime?.message}
      />
    </FormWrapper>
  )
}

export default StylistForm
