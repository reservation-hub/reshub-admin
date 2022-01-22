import React from 'react'
import { IPickerProps } from '@components/common/_PropsType'
import Selector from './Selector'
import { TIME_TABLE } from '@constants/Time'
import ErrorMessage from './ErrorMessage'

export interface ITimePickerProps extends IPickerProps {
  names: string[]
  errors: Record<string, any>
}

const TimePicker = ({
  control,
  names,
  classes,
  label,
  errors,
  errorTxt
}: ITimePickerProps) => {
  const timeTable = TIME_TABLE.map((time) => ({
    value: time,
    label: time
  }))
  return (
    <div className={`${classes} text-[1.6rem]`}>
      <span className='text-table-headerFont'>{label}</span>
      <div className='flex w-full justify-between items-center'>
        <Selector
          classes='w-[26rem]'
          item={timeTable}
          control={control}
          name={names[0]}
          error={errors?.startTime}
          errorTxt={errors?.startTime?.message}
        />
        <span> ~ </span>
        <Selector
          classes='w-[26rem]'
          item={timeTable}
          control={control}
          name={names[1]}
          error={errors?.endTime}
          errorTxt={errors?.endTime?.message}
        />
      </div>
      {/* {error && <ErrorMessage text={errorTxt} />} */}
    </div>
  )
}

export default TimePicker
