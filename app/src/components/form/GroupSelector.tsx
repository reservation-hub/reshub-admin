import React from 'react'
import Selector from '@components/common/atoms/Selector'
import { IPickerProps, selectType } from '@components/common/_PropsType'

export interface IGroupSelector extends IPickerProps {
  datas?: {
    areas: selectType[]
    pref: selectType[]
    city: selectType[]
    days: selectType[]
  }
}

const GroupSelector = ({ datas, control, classes }: IGroupSelector) => {
  return (
    <div className={`${classes} w-full flex justify-between text-[1.6rem]`}>
      <Selector
        id='area'
        name='areaId'
        label='エリア'
        classes='w-[18rem]'
        data={datas?.areas}
        control={control}
      />
      <Selector
        id='pref'
        name='prefectureId'
        label='都道府県'
        classes='w-[18rem]'
        data={datas?.pref}
        control={control}
      />
      <Selector
        id='city'
        name='cityId'
        label='市区町村'
        classes='w-[18rem]'
        data={datas?.city}
        control={control}
      />
    </div>
  )
}

export default GroupSelector
