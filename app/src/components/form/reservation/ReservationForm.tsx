import InputFiled from '@/components/common/atoms/InputFiled'
import React from 'react'
import FormWrapper from '../FormWrapper'
import { IFormProps } from '../_PropsType'
import { ReservationSchema } from './reservationSchema'

const ReservationForm = <T extends ReservationSchema>({
  control,
  formState,
  error,
  submitHandler
}: IFormProps<T>) => {
  return (
    <FormWrapper
      submitHandler={submitHandler}
      text='予約'
    >
      <InputFiled 
        id=''
        name='reservationDate'
        label='予約日時'
      />
    </FormWrapper>
  )
}

export default ReservationForm
