import React from 'react'
import AsyncSelector from '@components/common/atoms/AsyncSelector'
import InputFiled from '@components/common/atoms/InputFiled'
import Selector from '@components/common/atoms/Selector'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import { useLoadOptions } from '@utils/hooks/useLoadOptions'
import FormWrapper from '@components/form//FormWrapper'
import { IFormProps } from '@components/form/_PropsType'
import { ReservationSchema } from './reservationSchema'
import { TIME_TABLE } from '@constants/Time'

export interface IReservationFormProps<T> extends IFormProps<T> {
  shopId: number
}

const ReservationForm = <T extends ReservationSchema>({
  control,
  formState,
  error,
  shopId,
  defaultValue,
  submitHandler
}: IReservationFormProps<T>) => {
  const loadMenu = useLoadOptions(baseEndpoint.shops, shopId, 'menu')
  const loadStylist = useLoadOptions(baseEndpoint.shops, shopId, 'stylist')
  const loadUser = useLoadOptions(
    `${baseEndpoint.users}`,
    undefined,
    undefined,
    true
  )

  console.log(error)

  return (
    <FormWrapper
      submitHandler={submitHandler}
      text={
        formState?.reservation
          ? `${formState.reservation.id}編集`
          : '予約新規作成'
      }
    >
      <div className='flex justify-between'>
        <InputFiled
          id='reservationDay'
          name='reservationDay'
          label='予約日'
          type='date'
          classes='my-3 w-[35rem]'
          control={control}
          error={error?.reservationDay}
          errorTxt={error?.reservationDay?.message}
        />
        <Selector
          id='reservationTime'
          name='reservationTime'
          label='予約日時'
          classes='my-3 w-[20rem]'
          control={control}
          error={error?.reservationTime}
          errorTxt={error?.reservationTime?.message}
          item={TIME_TABLE.map((time) => ({ label: time, value: time }))}
        />
      </div>
      <AsyncSelector
        id='userId'
        name='userId'
        label='ユーザー選択'
        classes='my-3'
        control={control}
        defaultAdditional={{ page: 1 }}
        loadOptions={loadUser.loadMore}
        value={defaultValue?.clientName}
        error={error?.userId}
        errorTxt={error?.userId?.message}
        numric
      />
      <AsyncSelector
        id='menuId'
        name='menuId'
        label='メニュー選択'
        classes='my-3'
        control={control}
        defaultAdditional={{ page: 1 }}
        loadOptions={loadMenu.loadMore}
        value={defaultValue?.menuName}
        error={error?.menuId}
        errorTxt={error?.menuId?.message}
        numric
      />
      <AsyncSelector
        id='stylistId'
        name='stylistId'
        label='スタイリスト選択'
        classes='mt-3 mb-10'
        control={control}
        defaultAdditional={{ page: 1 }}
        loadOptions={loadStylist.loadMore}
        value={defaultValue?.stylistName}
        error={error?.stylistId}
        errorTxt={error?.stylistId?.message}
        numric
      />
    </FormWrapper>
  )
}

export default ReservationForm
