import React from 'react'
import { TDays } from '@constants/Days'
import { Area, City, Prefecture } from '@entities/Location'
import dayjs from 'dayjs'
import DayPicker from '@components/common/atoms/DayPicker'
import Selector from '@components/common/atoms/Selector'
import { IPickerProps } from '@components/common/_PropsType'

export interface IGroupSelector extends IPickerProps {
  selectToId?: boolean
  groupType?: 'birthday' | 'location'
  datas?: { areas: Area[]; pref: Prefecture[]; city: City[]; days: TDays[] }
  values?: string[]
}

const GroupSelector = ({
  value,
  onChange,
  groupType,
  datas,
  values
}: IGroupSelector) => {
  if (groupType === 'birthday') {
    return (
      <>
        <DayPicker
          id='year'
          label='年'
          name='birthdayY'
          classes='w-[17.5rem]'
          onChange={onChange}
          from={1900}
          to={dayjs().year()}
          value={values?.[0]}
        />
        <DayPicker
          id='month'
          label='月'
          name='birthdayM'
          classes='w-[17.5rem]'
          onChange={onChange}
          from={1}
          to={12}
          value={value?.[1]}
        />
        <DayPicker
          id='day'
          label='日'
          name='birthdayD'
          classes='w-[17.5rem]'
          onChange={onChange}
          from={1}
          to={31}
          value={value?.[2]}
        />
      </>
    )
  } else {
    return (
      <>
        <Selector
          id='area'
          name='areaId'
          value={values?.[0]}
          onChange={onChange}
          data={datas?.areas}
          label='エリア'
          classes='w-[18rem]'
          selectToId
        />
        <Selector
          id='pref'
          name='prefectureId'
          value={values?.[1]}
          onChange={onChange}
          data={datas?.pref}
          label='都道府県'
          classes='w-[18rem]'
          selectToId
        />
        <Selector
          id='city'
          name='cityId'
          value={values?.[2]}
          onChange={onChange}
          data={datas?.city}
          label='市区町村'
          classes='w-[18rem]'
          selectToId
        />
      </>
    )
  }
}

export default GroupSelector
