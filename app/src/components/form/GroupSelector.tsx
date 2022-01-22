import React from 'react'
import Selector from '@components/common/atoms/Selector'
import { IPickerProps, OptionsType } from '@components/common/_PropsType'

export interface IGroupSelector extends IPickerProps {
  items?: {
    areas: OptionsType[]
    pref: OptionsType[]
    city: OptionsType[]
  }
  errors?: Record<string, any>
}

const GroupSelector = ({ items, control, classes, errors }: IGroupSelector) => {
  return (
    <div className={`${classes} w-full flex justify-between text-[1.6rem]`}>
      <Selector
        id='area'
        name='areaId'
        label='エリア'
        classes='w-[18rem]'
        item={items?.areas}
        control={control}
        error={errors?.area}
        errorTxt={errors?.area?.message}
      />
      <Selector
        id='pref'
        name='prefectureId'
        label='都道府県'
        classes='w-[18rem]'
        item={items?.pref}
        control={control}
        error={errors?.prefecture}
        errorTxt={errors?.prefecture?.message}
      />
      <Selector
        id='city'
        name='cityId'
        label='市区町村'
        classes='w-[18rem]'
        item={items?.city}
        control={control}
        error={errors?.city}
        errorTxt={errors?.city?.message}
      />
    </div>
  )
}

export default GroupSelector
