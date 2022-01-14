import React, { useCallback } from 'react'
import MainTemplate from '@/components/common/layout/MainTemplate'
import SettingForm from '@/components/form/setting/SettingForm'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { changePassword } from '@/store/actions/userAction'
import { settingSchema, SettingSchema } from '@/components/form/setting/settingSchema'
import { zodResolver } from '@hookform/resolvers/zod'

const Setting = () => {
  const dispatch = useDispatch()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<SettingSchema>({
    resolver: zodResolver(settingSchema),
    mode: 'onSubmit',
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    }
  })

  const onSubmit: SubmitHandler<SettingSchema> = useCallback((value, event) => {
    event?.preventDefault()
    dispatch(changePassword({id: 1, params: value}))
  }, [dispatch])

  return (
    <MainTemplate>
      <SettingForm
        submitHandler={handleSubmit(onSubmit)}
        error={errors}
        control={control}
      />
    </MainTemplate>
  )
}

export default Setting
