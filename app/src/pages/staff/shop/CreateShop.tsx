import CustomButton from '@/components/common/atoms/CustomButton'
import CenterBox from '@/components/common/layout/CenterBox'
import SubTemplate from '@/components/common/layout/SubTemplate'
import SalonForm from '@/components/form/SalonForm'
import { TChangeHandler, TSalonInput } from '@/components/form/_PropsType'
import { addShop } from '@/store/actions/shopAction'
import { insertShopQuery } from '@/utils/api/request-response-types/ShopService'
import { useCheckBox } from '@/utils/hooks/useCheckBox'
import useInput from '@/utils/hooks/useInput'
import { useTimePicker } from '@/utils/hooks/useTimePicker'
import React, { useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'

const CreateShop = () => {
  let pageType = 'test'
  const dispatch = useDispatch()
  const startAt = useTimePicker('')
  const endAt = useTimePicker('')
  const { checked, changeHandler } = useCheckBox([])

  const { input, ChangeHandler } = useInput({
    name: '',
    address: '',
    phoneNumber: '',
    areaId: '',
    prefectureId: '',
    cityId: '',
    details: ''
  })

  const changeHandlers = {
    input: ChangeHandler,
    check: changeHandler,
    startAt: startAt.changeHandler,
    endAt: endAt.changeHandler
  } as TChangeHandler

  const form = useMemo(() => {
    return {
      name: input.name,
      address: input.address,
      phoneNumber: input.phoneNumber,
      cityId: String(input.cityId),
      prefectureId: String(input.prefectureId),
      areaId: String(input.areaId),
      startTime: { hour: String(startAt.hour), minute: String(startAt.minute) },
      endTime: { hour: String(endAt.hour), minute: String(endAt.minute) },
      days: checked,
      details: input.details
    } as TSalonInput
  }, [input, startAt, endAt, checked])

  const shopData: insertShopQuery = useMemo(() => {
    return {
      name: form.name,
      address: form.address,
      phoneNumber: form.phoneNumber,
      startTime: startAt.HHmm,
      endTime: endAt.HHmm,
      areaId: Number(form.areaId),
      prefectureId: Number(form.prefectureId),
      cityId: Number(form.cityId),
      days: form.days,
      details: form.details
    }
  }, [form, startAt.HHmm, endAt.HHmm, checked])

  const change = () => {
    if (pageType === 'test') {
      pageType = 'test2'
      console.log(pageType)
    }
  }

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      dispatch(addShop(shopData))
    },
    [dispatch, shopData]
  )

  console.log(pageType)

  return (
    <SubTemplate>
      <CenterBox classes='w-[80rem] h-[50rem] rounded-[.5rem] bg-secondary-main overflow-scroll'>
        <SalonForm
          submitHandler={onSubmit}
          formValue={form}
          changeHandlers={changeHandlers}
        />
      </CenterBox>
    </SubTemplate>
  )
}

export default CreateShop
