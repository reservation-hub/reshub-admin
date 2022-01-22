import React, { ChangeEvent, useCallback, useState } from 'react'
import { IPickerProps } from '@components/common/_PropsType'
import { useController } from 'react-hook-form'
import ErrorMessage from './ErrorMessage'

export interface ICheckBoxProps extends IPickerProps {
  checkedData?: string[]
}

const CheckBox = ({
  item,
  checkedData,
  control,
  error,
  errorTxt,
  name,
  id,
  label,
  classes,
  fullWidth
}: ICheckBoxProps) => {
  const { field } = useController({ control, name })
  if (checkedData) field.value = checkedData
  const [values, setValues] = useState(field.value || [])

  const changeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const target = e.target
      const copyValue: string[] = [...values]

      if (target.checked) {
        field.onChange([...copyValue, target.value])
        setValues([...copyValue, target.value])
      } else {
        field.onChange(copyValue.filter((v) => v !== target.value))
        setValues(copyValue.filter((v) => v !== target.value))
      }
    },
    [values]
  )

  return (
    <div className={fullWidth ? `${classes} w-full` : classes}>
      <div className='text-[1.6rem]'>
        <label htmlFor={id} className='text-table-headerFont'>
          {label}
        </label>

        <div id={id} className='flex justify-between'>
          {item?.map((value, index) => (
            <div key={index} className='w-[7rem] h-[4.4rem]'>
              <input
                id={`check-${value.label}`}
                type='checkbox'
                name={name}
                checked={values?.includes(value.label)}
                value={value.value}
                onChange={changeHandler}
              />
              <label
                htmlFor={`check-${value.label}`}
                className={error ? 'labels border-error-main' : 'labels'}
              >
                {value.label}
              </label>
            </div>
          ))}
        </div>
        {error && <ErrorMessage text={errorTxt} />}
      </div>
    </div>
  )
}

export default CheckBox
