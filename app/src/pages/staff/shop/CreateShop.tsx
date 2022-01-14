import { InsertShopQuery } from '@utils/api/request-response-types/Shop'
import CenterBox from '@components/common/layout/CenterBox'
import SubTemplate from '@components/common/layout/SubTemplate'
import SalonForm from '@/components/form/shop/SalonForm'
import { addShop } from '@store/actions/shopAction'
import { useCheckBox } from '@utils/hooks/useCheckBox'
import useInput from '@utils/hooks/useInput'
import { useTimePicker } from '@utils/hooks/useTimePicker'
import React, { useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'

const CreateShop = () => {
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

  // const shopData: InsertShopQuery = useMemo(() => {
  //   return {
  //     name: form.name,
  //     address: form.address,
  //     phoneNumber: form.phoneNumber,
  //     startTime: startAt.HHmm,
  //     endTime: endAt.HHmm,
  //     areaId: Number(form.areaId),
  //     prefectureId: Number(form.prefectureId),
  //     cityId: Number(form.cityId),
  //     days: form.days,
  //     details: form.details
  //   }
  // }, [form, startAt.HHmm, endAt.HHmm, checked])

  // const onSubmit = useCallback(
  //   async (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault()
  //     dispatch(addShop(shopData))
  //   },
  //   [dispatch, shopData]
  // )

  const centerBarStyled =
    'w-[80rem] h-[50rem] rounded-[.5rem] bg-secondary-main overflow-scroll'

  return (
    <SubTemplate>
      <CenterBox classes={centerBarStyled}>
        {/* <SalonForm
          submitHandler={onSubmit}
          formValue={form}
          changeHandlers={changeHandlers}
        /> */}
      </CenterBox>
    </SubTemplate>
  )
}

export default CreateShop
