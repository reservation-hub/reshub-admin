import React from 'react'
import { IPickerProps } from '@components/common/_PropsType'
import Selector from './Selector'
import { TIME_TABLE } from '@/constants/Time'
import ErrorMessage from './ErrorMessage'

export interface ITimePickerProps extends IPickerProps {
  names: string[]
}

const TimePicker = ({
  control,
  names,
  classes,
  label,
  error,
  errorTxt
}: ITimePickerProps) => {
  const timeTable = TIME_TABLE.map((time) => ({
    value: time,
    name: time
  }))
  return (
    <div className={`${classes} text-[1.6rem]`}>
      <span className='text-table-headerFont'>{label}</span>
      <div className='flex w-full justify-between items-center'>
        <Selector
          classes='w-[26rem]'
          data={timeTable}
          control={control}
          name={names[0]}
          error={error}
        />
        <span> ~ </span>
        <Selector
          classes='w-[26rem]'
          data={timeTable}
          control={control}
          name={names[1]}
          error={error}
        />
      </div>
      {error && <ErrorMessage text={errorTxt} />}
    </div>
  )
}

export default TimePicker
