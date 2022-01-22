import CenterBox from '@components/common/layout/CenterBox'
import SubTemplate from '@components/common/layout/SubTemplate'
import SalonForm from '@components/form/shop/SalonForm'
import { addShop } from '@store/actions/shopAction'
import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { SubmitHandler, useForm } from 'react-hook-form'
import { shopSchema, ShopSchema } from '@components/form/shop/shopSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import convertScheduleTimeToDateString from '@utils/hooks/useConvertScheduleTimeToDateString'
import Welcome from '@/components/form/shop/Welcom'

const CreateShop = () => {
  const dispatch = useDispatch()
  const [step, setStep] = useState<'1' | '2'>('1')

  const box =
    'w-[80rem] h-[70rem] rounded-[.5rem] bg-secondary-main overflow-scroll'

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<ShopSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(shopSchema),
    defaultValues: {
      name: '',
      phoneNumber: '',
      address: '',
      areaId: '',
      prefectureId: '',
      cityId: '',
      startTime: '',
      endTime: '',
      days: [],
      seats: '',
      details: ''
    }
  })

  const watchLocationIds = watch(['areaId', 'prefectureId'])

  const createShop: SubmitHandler<ShopSchema> = useCallback((value) => {
    dispatch(
      addShop({
        ...value,
        areaId: Number(value.areaId),
        prefectureId: Number(value.prefectureId),
        cityId: Number(value.cityId),
        seats: Number(value.seats),
        startTime: convertScheduleTimeToDateString(value.startTime),
        endTime: convertScheduleTimeToDateString(value.endTime)
      })
    )
  }, [])

  return (
    <SubTemplate>
      <CenterBox classes={step === '1' ? '' : box}>
        {step === '1' ? (
          <Welcome onClick={() => setStep('2')} />
        ) : (
          step === '2' && (
            <SalonForm
              submitHandler={handleSubmit(createShop)}
              onClick={() => setStep('1')}
              watchLocationIds={watchLocationIds}
              control={control}
              error={errors}
            />
          )
        )}
      </CenterBox>
    </SubTemplate>
  )
}

export default CreateShop
